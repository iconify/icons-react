import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wmdkf4bfk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wmdkf4bfk"/>`,
		"fallback": "mdi:ceiling-light-multiple",
	});
}

export default Component;
