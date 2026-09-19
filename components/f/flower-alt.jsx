import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vphlp94-e.css';

const viewBox = {"width":384,"height":456};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vphlp94-e"/>`,
		"fallback": "zmdi:flower-alt",
	});
}

export default Component;
