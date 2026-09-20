import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e-ajg0yqj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e-ajg0yqj"/>`,
		"fallback": "mdi:folder-search",
	});
}

export default Component;
