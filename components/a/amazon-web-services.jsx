import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yc5obibsk.css';
import '../../css/f/fg1jarbzp.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yc5obibsk"/><path class="fg1jarbzp"/>`,
		"fallback": "selfhst:amazon-web-services",
	});
}

export default Component;
