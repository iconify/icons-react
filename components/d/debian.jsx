import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g27c72f7n.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g27c72f7n"/>`,
		"fallback": "fa7-brands:debian",
	});
}

export default Component;
