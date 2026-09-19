import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pil6s8bfj.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pil6s8bfj"/>`,
		"fallback": "whh:chandelier",
	});
}

export default Component;
