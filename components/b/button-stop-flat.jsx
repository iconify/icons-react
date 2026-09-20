import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xh3yrdbdd.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="xh3yrdbdd"/>`,
		"fallback": "streamline-color:button-stop-flat",
	});
}

export default Component;
