import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/daap6e5ur.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="daap6e5ur"/>`,
		"fallback": "streamline-ultimate:coding-apps-website-apps-add-widget-bold",
	});
}

export default Component;
