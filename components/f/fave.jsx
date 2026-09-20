import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wj749-bwk.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wj749-bwk"/>`,
		"fallback": "raphael:fave",
	});
}

export default Component;
