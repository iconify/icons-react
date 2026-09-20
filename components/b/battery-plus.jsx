import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yru80ibvw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yru80ibvw"/>`,
		"fallback": "lucide:battery-plus",
	});
}

export default Component;
