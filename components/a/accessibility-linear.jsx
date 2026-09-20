import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/s/shu3xdl9q.css';
import '../../css/s/srxr8c13n.css';
import '../../css/i/iloc7qlea.css';
import '../../css/n/ntwgbdcqi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><circle class="shu3xdl9q"/><path class="srxr8c13n"/><path class="iloc7qlea"/><path class="ntwgbdcqi"/></g>`,
		"fallback": "solar:accessibility-linear",
	});
}

export default Component;
