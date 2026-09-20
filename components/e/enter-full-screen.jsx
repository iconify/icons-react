import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/slqqs4bfc.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="slqqs4bfc"/>`,
		"fallback": "radix-icons:enter-full-screen",
	});
}

export default Component;
