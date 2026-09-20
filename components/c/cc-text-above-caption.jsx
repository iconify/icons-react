import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e0jst6b5z.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e0jst6b5z"/>`,
		"fallback": "pinhead:cc-text-above-caption",
	});
}

export default Component;
