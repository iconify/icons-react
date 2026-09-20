import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hd64akb8p.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hd64akb8p"/>`,
		"fallback": "radix-icons:font-style",
	});
}

export default Component;
