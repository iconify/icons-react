import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vc_wzy_-c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vc_wzy_-c"/>`,
		"fallback": "mingcute:bookmarks-line",
	});
}

export default Component;
