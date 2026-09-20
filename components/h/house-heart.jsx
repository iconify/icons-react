import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/d/d4ppg3peb.css';
import '../../css/q/qc-qo0m-p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="d4ppg3peb"/><path class="qc-qo0m-p"/></g>`,
		"fallback": "lucide:house-heart",
	});
}

export default Component;
