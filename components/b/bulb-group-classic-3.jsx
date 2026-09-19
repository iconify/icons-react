import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yepbyis8w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yepbyis8w"/>`,
		"fallback": "cbi:bulb-group-classic-3",
	});
}

export default Component;
