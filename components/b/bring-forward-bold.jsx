import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b5ncocbfh.css';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b5ncocbfh"/>`,
		"fallback": "pullo:bring-forward-bold",
	});
}

export default Component;
