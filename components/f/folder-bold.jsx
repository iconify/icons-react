import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y7ds70btl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y7ds70btl"/>`,
		"fallback": "iconamoon:folder-bold",
	});
}

export default Component;
