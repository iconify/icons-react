import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/io0afsb9o.css';
import '../../css/n/np4wfjoyy.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="io0afsb9o"/><path class="np4wfjoyy"/>`,
		"fallback": "carbon:cyclist",
	});
}

export default Component;
