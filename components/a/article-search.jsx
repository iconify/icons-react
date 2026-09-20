import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dp00_mbqe.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dp00_mbqe"/>`,
		"fallback": "ooui:article-search",
	});
}

export default Component;
