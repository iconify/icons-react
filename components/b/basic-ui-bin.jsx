import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tp4xoebgk.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="tp4xoebgk"/>`,
		"fallback": "streamline-block:basic-ui-bin",
	});
}

export default Component;
