import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pk4pkibge.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pk4pkibge"/>`,
		"fallback": "ooui:close",
	});
}

export default Component;
