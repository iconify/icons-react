import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tsovqt3vk.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tsovqt3vk"/>`,
		"fallback": "pinhead:gull-and-exclamation-point",
	});
}

export default Component;
