import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yuysp5byl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yuysp5byl"/>`,
		"fallback": "simple-icons:glance",
	});
}

export default Component;
