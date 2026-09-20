import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dmpwi8b8l.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dmpwi8b8l"/>`,
		"fallback": "radix-icons:arrow-up",
	});
}

export default Component;
