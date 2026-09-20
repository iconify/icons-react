import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u-5rh9o_m.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u-5rh9o_m"/>`,
		"fallback": "pinhead:banknote-stack-in-slot",
	});
}

export default Component;
