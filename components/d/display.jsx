import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ynt-rn94e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ynt-rn94e"/>`,
		"fallback": "reicon:display",
	});
}

export default Component;
