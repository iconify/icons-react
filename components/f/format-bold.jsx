import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a3p-x7bjn.css';

const viewBox = {"width":22,"height":22};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a3p-x7bjn"/>`,
		"fallback": "memory:format-bold",
	});
}

export default Component;
