import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/lbb10x2jl.css';
import '../../css/l/lfcb33blx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="lbb10x2jl"/><path class="lfcb33blx"/></g>`,
		"fallback": "tdesign:correct",
	});
}

export default Component;
