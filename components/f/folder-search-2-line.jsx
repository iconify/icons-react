import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xlnfd2b4r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xlnfd2b4r"/>`,
		"fallback": "mingcute:folder-search-2-line",
	});
}

export default Component;
