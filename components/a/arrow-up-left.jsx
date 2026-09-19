import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zkbv50enl.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zkbv50enl"/>`,
		"fallback": "carbon:arrow-up-left",
	});
}

export default Component;
