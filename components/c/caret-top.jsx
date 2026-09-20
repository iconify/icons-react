import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/ts2jbvboe.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ts2jbvboe"/>`,
		"fallback": "oi:caret-top",
	});
}

export default Component;
