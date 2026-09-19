import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d4-a0lh9s.css';

const viewBox = {"width":717,"height":717};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d4-a0lh9s"/>`,
		"fallback": "ls:compass",
	});
}

export default Component;
