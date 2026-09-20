import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yu64yzbfw.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yu64yzbfw"/>`,
		"fallback": "streamline:dropbox",
	});
}

export default Component;
