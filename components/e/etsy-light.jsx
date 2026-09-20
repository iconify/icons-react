import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a485dfc3x.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a485dfc3x"/>`,
		"fallback": "selfhst:etsy-light",
	});
}

export default Component;
