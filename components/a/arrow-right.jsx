import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o1e1eib7x.css';
import '../../css/f/f1pn7ybqo.css';

const viewBox = {"width":40,"height":40};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o1e1eib7x"/><path class="f1pn7ybqo"/>`,
		"fallback": "iwwa:arrow-right",
	});
}

export default Component;
