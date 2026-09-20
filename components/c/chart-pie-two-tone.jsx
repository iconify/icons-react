import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/g/grn5n2bhg.css';
import '../../css/v/vdstzy06e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="grn5n2bhg"/><path class="vdstzy06e"/></g>`,
		"fallback": "keyline-icons:chart-pie-two-tone",
	});
}

export default Component;
