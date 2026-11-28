import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tc6qaeban.css';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tc6qaeban"/>`,
		"fallback": "pullo:border-left-fill",
	});
}

export default Component;
