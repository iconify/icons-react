import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wqpo30-3h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wqpo30-3h"/>`,
		"fallback": "si:ai-sort-alt-1-fill",
	});
}

export default Component;
