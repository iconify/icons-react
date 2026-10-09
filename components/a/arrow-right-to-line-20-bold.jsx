import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bvilsvvcy.css';
import '../../css/d/d6ukndv1x.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bvilsvvcy"/><path class="d6ukndv1x"/>`,
		"fallback": "energy-icons:arrow-right-to-line-20-bold",
	});
}

export default Component;
