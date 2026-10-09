import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t22ym13gb.css';
import '../../css/q/q7uz6xnzz.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t22ym13gb"/><path class="q7uz6xnzz"/>`,
		"fallback": "energy-icons:brush-20",
	});
}

export default Component;
