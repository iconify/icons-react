import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x3xehe9tz.css';
import '../../css/k/koobuxbzj.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x3xehe9tz"/><path class="koobuxbzj"/>`,
		"fallback": "selfhst:feeds-fun-light",
	});
}

export default Component;
