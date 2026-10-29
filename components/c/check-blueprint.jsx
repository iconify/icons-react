import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/f/f3i48zlop.css';
import '../../css/v/vn7k32bvs.css';
import '../../css/w/wt6q7nbgv.css';
import '../../css/q/quy7-c9io.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="f3i48zlop wm-deco"/><path class="vn7k32bvs wm-deco"/><path class="wt6q7nbgv"/><path class="quy7-c9io"/></g>`,
		"fallback": "withicons:check-blueprint",
	});
}

export default Component;
