import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uelx27b-l.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uelx27b-l"/>`,
		"fallback": "pinhead:confused-face-in-circle-outline",
	});
}

export default Component;
