import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ybxol0kpz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ybxol0kpz"/>`,
		"fallback": "simple-icons:foursquare",
	});
}

export default Component;
