import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qzw393b1s.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qzw393b1s"/>`,
		"fallback": "radix-icons:dots-vertical",
	});
}

export default Component;
