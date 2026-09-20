import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tnsfc7b1s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tnsfc7b1s"/>`,
		"fallback": "mdi:code-greater-than",
	});
}

export default Component;
