import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/loycbjbia.css';
import '../../css/w/w3qyplb8m.css';
import '../../css/i/ihoo6dbgx.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="loycbjbia"/><path class="w3qyplb8m"/><path class="ihoo6dbgx"/>`,
		"fallback": "selfhst:domainmod-light",
	});
}

export default Component;
