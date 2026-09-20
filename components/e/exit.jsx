import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q2dnefb6d.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q2dnefb6d"/>`,
		"fallback": "radix-icons:exit",
	});
}

export default Component;
