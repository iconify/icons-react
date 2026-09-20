import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o03zinb9n.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o03zinb9n"/>`,
		"fallback": "radix-icons:code",
	});
}

export default Component;
