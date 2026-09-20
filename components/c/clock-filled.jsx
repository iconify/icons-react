import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yc5ee2brf.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yc5ee2brf"/>`,
		"fallback": "ix:clock-filled",
	});
}

export default Component;
