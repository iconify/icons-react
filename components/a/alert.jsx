import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jfeh86b3e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jfeh86b3e"/>`,
		"fallback": "pixelarticons:alert",
	});
}

export default Component;
