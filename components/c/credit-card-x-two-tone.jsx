import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/v/vyd-8pbto.css';
import '../../css/i/i_cyu-blu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="vyd-8pbto"/><path class="i_cyu-blu"/></g>`,
		"fallback": "keyline-icons:credit-card-x-two-tone",
	});
}

export default Component;
