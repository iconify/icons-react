import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/ntq7fwbri.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ntq7fwbri"/>`,
		"fallback": "selfhst:flaresolverr-dark",
	});
}

export default Component;
