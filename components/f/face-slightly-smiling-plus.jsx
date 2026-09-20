import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/s/s6dq_8bij.css';
import '../../css/q/qko5qirpv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="s6dq_8bij"/><path class="qko5qirpv"/></g>`,
		"fallback": "lucide:face-slightly-smiling-plus",
	});
}

export default Component;
