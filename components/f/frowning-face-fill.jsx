import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fqs80qnxc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="fqs80qnxc"/>`,
		"fallback": "iconamoon:frowning-face-fill",
	});
}

export default Component;
