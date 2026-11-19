import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/vlsginm5z.css';
import '../../css/y/ya_leubpz.css';
import '../../css/x/x40hrfbwp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="vlsginm5z"/><path class="ya_leubpz"/><path class="x40hrfbwp"/></g>`,
		"fallback": "andrsrxn:file-check",
	});
}

export default Component;
