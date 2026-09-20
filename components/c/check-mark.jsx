import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/otrl-6b3q.css';
import '../../css/o/oq8tqccjn.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="otrl-6b3q"/><path class="oq8tqccjn"/>`,
		"fallback": "openmoji:check-mark",
	});
}

export default Component;
