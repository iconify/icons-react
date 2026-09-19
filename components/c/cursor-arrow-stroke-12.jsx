import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ujlo24bpj.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ujlo24bpj"/>`,
		"fallback": "garden:cursor-arrow-stroke-12",
	});
}

export default Component;
