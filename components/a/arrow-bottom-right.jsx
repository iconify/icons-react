import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gnxm2eb5v.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gnxm2eb5v"/>`,
		"fallback": "radix-icons:arrow-bottom-right",
	});
}

export default Component;
