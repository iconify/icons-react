import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nqe-16brb.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nqe-16brb"/>`,
		"fallback": "streamline-flex:arrow-expand",
	});
}

export default Component;
