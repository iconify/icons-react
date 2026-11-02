import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zr8ocvcld.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zr8ocvcld"/>`,
		"fallback": "mingcute:file-search-corner-line",
	});
}

export default Component;
