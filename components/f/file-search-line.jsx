import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aje5j-b_n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="aje5j-b_n"/>`,
		"fallback": "mingcute:file-search-line",
	});
}

export default Component;
