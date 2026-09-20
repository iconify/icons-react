import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tc-vztb9o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tc-vztb9o"/>`,
		"fallback": "pixelarticons:compass",
	});
}

export default Component;
