import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/rt690e8wj.css';
import '../../css/f/fgl-1n9go.css';
import '../../css/v/vs7mxrbsj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path fill="url(#SVG1fzibeaH)" class="rt690e8wj"/><path class="fgl-1n9go"/><defs><linearGradient id="SVG1fzibeaH" x1="12" x2="12" y1="0" y2="24" gradientUnits="userSpaceOnUse"><stop class="vs7mxrbsj"/><stop offset="1"/></linearGradient></defs></g>`,
		"fallback": "thesvg-color:brave-origin",
	});
}

export default Component;
