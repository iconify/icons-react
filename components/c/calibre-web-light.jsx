import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wmw1q3zex.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wmw1q3zex"/>`,
		"fallback": "selfhst:calibre-web-light",
	});
}

export default Component;
