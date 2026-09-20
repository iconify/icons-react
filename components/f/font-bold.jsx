import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c5za02bfw.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c5za02bfw"/>`,
		"fallback": "radix-icons:font-bold",
	});
}

export default Component;
