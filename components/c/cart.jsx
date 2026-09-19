import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dsglcjabq.css';

const viewBox = {"width":720,"height":820};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dsglcjabq"/>`,
		"fallback": "il:cart",
	});
}

export default Component;
