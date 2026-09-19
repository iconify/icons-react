import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wu0fn4-yu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wu0fn4-yu"/>`,
		"fallback": "hugeicons:call-incoming-01",
	});
}

export default Component;
