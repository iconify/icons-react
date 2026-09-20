import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y5la8q4rg.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y5la8q4rg"/>`,
		"fallback": "radix-icons:crosshair-1",
	});
}

export default Component;
