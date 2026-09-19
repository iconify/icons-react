import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2upjwmzt.css';

const viewBox = {"width":770,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d2upjwmzt"/>`,
		"fallback": "whh:flame",
	});
}

export default Component;
