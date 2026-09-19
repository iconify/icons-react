import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ypaq_fbya.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ypaq_fbya"/>`,
		"fallback": "iconoir:file-not-found",
	});
}

export default Component;
