import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/duliw2bnb.css';

const viewBox = {"width":666,"height":644};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="duliw2bnb"/>`,
		"fallback": "ls:alignleft",
	});
}

export default Component;
