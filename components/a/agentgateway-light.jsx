import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pbwno_b7c.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pbwno_b7c"/>`,
		"fallback": "selfhst:agentgateway-light",
	});
}

export default Component;
