import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hswb42bvo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hswb42bvo"/>`,
		"fallback": "ri:flutter-fill",
	});
}

export default Component;
