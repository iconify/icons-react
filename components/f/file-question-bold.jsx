import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nq6o97y7o.css';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nq6o97y7o"/>`,
		"fallback": "pullo:file-question-bold",
	});
}

export default Component;
