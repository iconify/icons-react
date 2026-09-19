import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c-03gibjn.css';

const viewBox = {"width":640,"height":1408};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c-03gibjn"/>`,
		"fallback": "fa:info",
	});
}

export default Component;
