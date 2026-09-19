import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ykp-s9b3u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ykp-s9b3u"/>`,
		"fallback": "griddy-icons:component-carousel-horizontal",
	});
}

export default Component;
