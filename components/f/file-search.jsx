import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ihke9ubmj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ihke9ubmj"/>`,
		"fallback": "noviair-light:file-search",
	});
}

export default Component;
