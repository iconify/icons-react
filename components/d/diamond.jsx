import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lsd-6j50u.css';

const viewBox = {"width":1024,"height":896};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lsd-6j50u"/>`,
		"fallback": "whh:diamond",
	});
}

export default Component;
