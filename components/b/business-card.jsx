import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/oxql1ybdk.css';
import '../../css/v/vy-3i3bog.css';
import '../../css/n/nj3duacxn.css';
import '../../css/m/mghehjbdd.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="oxql1ybdk"/><path clip-rule="evenodd" class="vy-3i3bog"/><path class="nj3duacxn"/><path class="mghehjbdd"/></g>`,
		"fallback": "streamline-color:business-card",
	});
}

export default Component;
