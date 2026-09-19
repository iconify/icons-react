import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w16i9i5vk.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w16i9i5vk"/>`,
		"fallback": "whh:briefcase",
	});
}

export default Component;
