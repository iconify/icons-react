import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/q/q_4v1rsio.css';
import '../../css/q/qh73v7bag.css';
import '../../css/i/i-gcjwb_i.css';
import '../../css/l/l-8vobb6j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="q_4v1rsio wm-k"/><path class="qh73v7bag wm-a"/><path class="i-gcjwb_i"/><path class="l-8vobb6j"/></g>`,
		"fallback": "withicons-bauhaus:diya",
	});
}

export default Component;
