import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/as8j7acnn.css';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="as8j7acnn"/>`,
		"fallback": "pullo:check-circle-multiple-fill",
	});
}

export default Component;
