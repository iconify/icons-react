import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xg7n7en_l.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xg7n7en_l"/>`,
		"fallback": "radix-icons:card-stack-plus",
	});
}

export default Component;
