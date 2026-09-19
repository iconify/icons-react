import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a-8mdgbgj.css';

const viewBox = {"width":771,"height":1028};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a-8mdgbgj"/>`,
		"fallback": "whh:avocado",
	});
}

export default Component;
