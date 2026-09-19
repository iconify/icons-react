import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kamgprbrt.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kamgprbrt"/>`,
		"fallback": "famicons:arrow-back-circle",
	});
}

export default Component;
