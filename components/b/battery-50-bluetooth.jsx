import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m61z8jb3e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m61z8jb3e"/>`,
		"fallback": "mdi:battery-50-bluetooth",
	});
}

export default Component;
