import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tucwv7bnl.css';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tucwv7bnl"/>`,
		"fallback": "pullo:helicopter-fill",
	});
}

export default Component;
