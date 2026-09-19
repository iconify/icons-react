import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ams9aqsoz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ams9aqsoz"/>`,
		"fallback": "griddy-icons:enterprise",
	});
}

export default Component;
