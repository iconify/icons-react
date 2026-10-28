import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ek3flgivq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ek3flgivq"/>`,
		"fallback": "lucide:earbuds",
	});
}

export default Component;
