import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d6wm8ehfy.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="d6wm8ehfy"/>`,
		"fallback": "streamline-flex:bell-notification-solid",
	});
}

export default Component;
