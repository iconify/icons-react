import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jv6ya1rlm.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="jv6ya1rlm"/>`,
		"fallback": "streamline-color:battery-empty-1-flat",
	});
}

export default Component;
