import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z4_0yrkqi.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z4_0yrkqi"/>`,
		"fallback": "simple-line-icons:arrow-up-circle",
	});
}

export default Component;
