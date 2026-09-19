import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tc6a3p-ie.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tc6a3p-ie"/>`,
		"fallback": "f7:arrow-up-to-line",
	});
}

export default Component;
