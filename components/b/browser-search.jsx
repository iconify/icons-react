import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/qz4l92b3x.css';
import '../../css/z/za5e0bcco.css';
import '../../css/q/q1di9vuwt.css';
import '../../css/k/kzesvktmb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="qz4l92b3x"/><path class="za5e0bcco"/><path class="q1di9vuwt"/><path class="kzesvktmb"/></g>`,
		"fallback": "andrsrxn:browser-search",
	});
}

export default Component;
