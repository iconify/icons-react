import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p2108y1ui.css';

const viewBox = {"width":642,"height":717};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p2108y1ui"/>`,
		"fallback": "ls:flag",
	});
}

export default Component;
