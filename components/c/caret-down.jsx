import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gq0_qkw9t.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gq0_qkw9t"/>`,
		"fallback": "radix-icons:caret-down",
	});
}

export default Component;
