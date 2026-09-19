import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r209j7-tl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r209j7-tl"/>`,
		"fallback": "cbi:abc-iview",
	});
}

export default Component;
