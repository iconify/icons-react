import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e64liw9qe.css';

const viewBox = {"width":1408,"height":1408};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e64liw9qe"/>`,
		"fallback": "fa:filter",
	});
}

export default Component;
