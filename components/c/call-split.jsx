import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yh_7pnb1m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yh_7pnb1m"/>`,
		"fallback": "mdi:call-split",
	});
}

export default Component;
