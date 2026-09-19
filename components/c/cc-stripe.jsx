import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yui9tm2fe.css';

const viewBox = {"width":2304,"height":1536};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yui9tm2fe"/>`,
		"fallback": "fa:cc-stripe",
	});
}

export default Component;
