import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/e/e2ea05ihx.css';
import '../../css/v/vly0h-b7p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="e2ea05ihx"/><path class="vly0h-b7p"/></g>`,
		"fallback": "keyline-icons:circle-progress-three-quarter-two-tone",
	});
}

export default Component;
