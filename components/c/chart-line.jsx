import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/i/intpleh4e.css';
import '../../css/h/hbob4eecr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="intpleh4e"/><path class="hbob4eecr"/></g>`,
		"fallback": "withicons-retro:chart-line",
	});
}

export default Component;
