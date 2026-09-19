import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a9b1ifivl.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a9b1ifivl"/>`,
		"fallback": "fa7-brands:expeditedssl",
	});
}

export default Component;
