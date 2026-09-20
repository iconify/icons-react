import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uyy782h9h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uyy782h9h"/>`,
		"fallback": "simple-icons:adobelightroomclassic",
	});
}

export default Component;
