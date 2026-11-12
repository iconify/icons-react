import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ypknmkbto.css';
import '../../css/r/ra8213bpn.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ypknmkbto"/><path class="ra8213bpn"/>`,
		"fallback": "selfhst:duckduckgo-light",
	});
}

export default Component;
