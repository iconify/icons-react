import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f1ec4ib1s.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f1ec4ib1s"/>`,
		"fallback": "selfhst:agentgateway-dark",
	});
}

export default Component;
