import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qqt9uxmcu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qqt9uxmcu"/>`,
		"fallback": "thesvg:clerk",
	});
}

export default Component;
