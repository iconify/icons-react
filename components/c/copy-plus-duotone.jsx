import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/q/qmhym3b3z.css';
import '../../css/q/qpdh8hqdk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="qmhym3b3z"/><path class="qpdh8hqdk"/></g>`,
		"fallback": "keyline-icons:copy-plus-duotone",
	});
}

export default Component;
