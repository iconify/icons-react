import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hj6o4wafj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hj6o4wafj"/>`,
		"fallback": "mdi:image-search-outline",
	});
}

export default Component;
