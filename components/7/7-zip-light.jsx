import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y3rg8fb_w.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y3rg8fb_w"/>`,
		"fallback": "selfhst:7-zip-light",
	});
}

export default Component;
