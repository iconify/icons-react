import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/urjbm3bak.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="urjbm3bak"/>`,
		"fallback": "carbon:ibm-webmethods-hybrid-integration",
	});
}

export default Component;
