import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f0efqfbfw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f0efqfbfw"/>`,
		"fallback": "ri:folder-transfer-line",
	});
}

export default Component;
