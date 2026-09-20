import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wh32qp8wm.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="wh32qp8wm"/>`,
		"fallback": "pajamas:information",
	});
}

export default Component;
