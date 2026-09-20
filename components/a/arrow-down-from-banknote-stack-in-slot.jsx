import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wz9ab3bex.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wz9ab3bex"/>`,
		"fallback": "pinhead:arrow-down-from-banknote-stack-in-slot",
	});
}

export default Component;
