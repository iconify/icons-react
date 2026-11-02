import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/obs557bis.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="obs557bis"/>`,
		"fallback": "mingcute:file-search-corner-fill",
	});
}

export default Component;
