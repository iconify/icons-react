import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dr-s6ybza.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dr-s6ybza"/>`,
		"fallback": "whh:circleright",
	});
}

export default Component;
