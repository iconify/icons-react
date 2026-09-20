import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qz9ljnb5h.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qz9ljnb5h"/>`,
		"fallback": "raphael:aumade",
	});
}

export default Component;
