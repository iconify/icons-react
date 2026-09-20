import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p09a5v0qv.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p09a5v0qv"/>`,
		"fallback": "selfhst:coinmarketcap-dark",
	});
}

export default Component;
