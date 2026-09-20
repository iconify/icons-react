import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/op8cfac-b.css';
import '../../css/f/fc86yboyy.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="op8cfac-b"/><path class="fc86yboyy"/>`,
		"fallback": "openmoji:bald",
	});
}

export default Component;
