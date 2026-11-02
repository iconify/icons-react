import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eg26o2bru.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eg26o2bru"/>`,
		"fallback": "mingcute:database-search-line",
	});
}

export default Component;
