import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/bj0elwd8y.css';
import '../../css/y/y1vun_ufz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="bj0elwd8y"/><path class="y1vun_ufz"/></g>`,
		"fallback": "andrsrxn:align-box-left-top",
	});
}

export default Component;
