import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fytd5lhkx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fytd5lhkx"/>`,
		"fallback": "mdi:blood-alert-outline",
	});
}

export default Component;
