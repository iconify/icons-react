import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ewf1vbbgf.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ewf1vbbgf"/>`,
		"fallback": "pinhead:a-frame-tents",
	});
}

export default Component;
