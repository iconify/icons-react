import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/czn8j8ltd.css';
import '../../css/g/ga24sqbtj.css';
import '../../css/u/um_zvyb1k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="czn8j8ltd"/><path class="ga24sqbtj"/><path clip-rule="evenodd" class="um_zvyb1k"/>`,
		"fallback": "solar:chat-square-warning-outline",
	});
}

export default Component;
