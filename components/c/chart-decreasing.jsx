import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/imff4s__r.css';
import '../../css/v/vzvjqggfh.css';
import '../../css/h/h8mm66bgl.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="imff4s__r"/><path class="vzvjqggfh"/><path class="h8mm66bgl"/></g>`,
		"fallback": "fluent-emoji-flat:chart-decreasing",
	});
}

export default Component;
