import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/o/oj1ph4bdw.css';
import '../../css/m/m7wji7myk.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="oj1ph4bdw"/><path class="m7wji7myk"/></g>`,
		"fallback": "streamline:health-medical-heart-rate-health-beauty-information-data-beat-pulse-monitor-heart-rate-info",
	});
}

export default Component;
