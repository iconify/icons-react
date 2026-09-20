import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yfbdei4yb.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yfbdei4yb"/>`,
		"fallback": "streamline:hierarchy-10",
	});
}

export default Component;
