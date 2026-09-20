import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tl7klpbfa.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tl7klpbfa"/>`,
		"fallback": "ri:home-wifi-fill",
	});
}

export default Component;
