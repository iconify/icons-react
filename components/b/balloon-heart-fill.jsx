import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n74l300wp.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n74l300wp"/>`,
		"fallback": "bi:balloon-heart-fill",
	});
}

export default Component;
