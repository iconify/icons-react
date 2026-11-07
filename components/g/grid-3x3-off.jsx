import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/c/cpzvm_kwq.css';
import '../../css/f/fnv3mcc_b.css';
import '../../css/r/rzc3hnb2a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="cpzvm_kwq"/><path class="fnv3mcc_b"/><path class="rzc3hnb2a"/></g>`,
		"fallback": "lucide:grid-3x3-off",
	});
}

export default Component;
