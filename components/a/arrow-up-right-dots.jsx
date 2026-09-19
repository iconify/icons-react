import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ahmj-ibyl.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ahmj-ibyl"/>`,
		"fallback": "fa7-solid:arrow-up-right-dots",
	});
}

export default Component;
