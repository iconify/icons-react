import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vw_r7wb5e.css';

const viewBox = {"width":344,"height":384};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vw_r7wb5e"/>`,
		"fallback": "zmdi:format-valign-bottom",
	});
}

export default Component;
