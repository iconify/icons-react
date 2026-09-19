import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mj9jajbtl.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mj9jajbtl"/>`,
		"fallback": "fa7-brands:hacker-news",
	});
}

export default Component;
