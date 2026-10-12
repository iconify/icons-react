import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/r8weq0bsr.css';
import '../../css/a/alpy6ei4t.css';
import '../../css/j/jorm57b9u.css';
import '../../css/v/vzjft_b5e.css';
import '../../css/f/fjulys2qb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="r8weq0bsr"/><path class="alpy6ei4t"/><path class="jorm57b9u"/><path class="vzjft_b5e"/><path class="fjulys2qb"/></g>`,
		"fallback": "andrsrxn:clouds",
	});
}

export default Component;
