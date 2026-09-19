import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/w3uhfdc8n.css';
import '../../css/o/o3dkww06e.css';
import '../../css/e/emipqme2e.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="w3uhfdc8n"/><path class="o3dkww06e"/><path class="emipqme2e"/></g>`,
		"fallback": "glyphs:flip-duo",
	});
}

export default Component;
