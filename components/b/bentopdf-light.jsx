import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u5my2xbpv.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u5my2xbpv"/>`,
		"fallback": "selfhst:bentopdf-light",
	});
}

export default Component;
