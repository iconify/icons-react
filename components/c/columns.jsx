import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wlwlwjbvi.css';

const viewBox = {"width":1664,"height":1536};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wlwlwjbvi"/>`,
		"fallback": "fa:columns",
	});
}

export default Component;
