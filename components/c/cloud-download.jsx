import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gyyr9brib.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gyyr9brib"/>`,
		"fallback": "gridicons:cloud-download",
	});
}

export default Component;
