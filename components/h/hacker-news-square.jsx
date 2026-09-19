import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o196-bcxq.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o196-bcxq"/>`,
		"fallback": "fa7-brands:hacker-news-square",
	});
}

export default Component;
