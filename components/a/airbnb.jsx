import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/asw319c7q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="asw319c7q"/>`,
		"fallback": "hugeicons:airbnb",
	});
}

export default Component;
