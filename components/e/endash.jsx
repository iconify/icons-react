import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d0bly_bwb.css';

const viewBox = {"width":336,"height":614};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d0bly_bwb"/>`,
		"fallback": "ls:endash",
	});
}

export default Component;
