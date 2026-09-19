import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dcg7mybkr.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dcg7mybkr"/>`,
		"fallback": "fa7-solid:cloud-moon-rain",
	});
}

export default Component;
