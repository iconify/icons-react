import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g-sjx96yk.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g-sjx96yk"/>`,
		"fallback": "dashicons:calendar-alt",
	});
}

export default Component;
