import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yd6z99bvi.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yd6z99bvi"/>`,
		"fallback": "fa6-solid:comment-sms",
	});
}

export default Component;
