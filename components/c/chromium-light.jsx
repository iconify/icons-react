import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zhonq9zgy.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zhonq9zgy"/>`,
		"fallback": "selfhst:chromium-light",
	});
}

export default Component;
