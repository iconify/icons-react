import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x1do2fb_e.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x1do2fb_e"/>`,
		"fallback": "dinkie-icons:apple-small-filled",
	});
}

export default Component;
