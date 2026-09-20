import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zuw04zjab.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zuw04zjab"/>`,
		"fallback": "radix-icons:caret-up",
	});
}

export default Component;
