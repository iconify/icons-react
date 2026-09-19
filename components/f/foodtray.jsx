import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qdd6rybyq.css';

const viewBox = {"width":1024,"height":768};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qdd6rybyq"/>`,
		"fallback": "whh:foodtray",
	});
}

export default Component;
