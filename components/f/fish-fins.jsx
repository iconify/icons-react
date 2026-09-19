import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nw02hh1vb.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nw02hh1vb"/>`,
		"fallback": "fa7-solid:fish-fins",
	});
}

export default Component;
