import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dk5l3_60h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dk5l3_60h"/>`,
		"fallback": "weui:folder-outlined",
	});
}

export default Component;
