import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/clu8t7j1q.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="clu8t7j1q"/>`,
		"fallback": "la:imdb",
	});
}

export default Component;
