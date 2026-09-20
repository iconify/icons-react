import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/v/vyd-8pbto.css';
import '../../css/n/nt-ypobzw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="vyd-8pbto"/><path class="nt-ypobzw"/></g>`,
		"fallback": "keyline-icons:credit-card-x-duotone",
	});
}

export default Component;
