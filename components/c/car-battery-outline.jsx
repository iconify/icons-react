import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dgbg3kb5u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="dgbg3kb5u"/>`,
		"fallback": "solar:car-battery-outline",
	});
}

export default Component;
