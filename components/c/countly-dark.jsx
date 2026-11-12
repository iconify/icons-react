import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h2cwtf82h.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h2cwtf82h"/>`,
		"fallback": "selfhst:countly-dark",
	});
}

export default Component;
