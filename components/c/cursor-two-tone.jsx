import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/h/h3hnv6bpb.css';
import '../../css/w/ws640lbea.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="h3hnv6bpb"/><path class="ws640lbea"/></g>`,
		"fallback": "keyline-icons:cursor-two-tone",
	});
}

export default Component;
