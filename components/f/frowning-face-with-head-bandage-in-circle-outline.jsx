import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mnppzgb9o.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mnppzgb9o"/>`,
		"fallback": "pinhead:frowning-face-with-head-bandage-in-circle-outline",
	});
}

export default Component;
