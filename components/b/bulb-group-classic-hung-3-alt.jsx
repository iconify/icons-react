import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/os60q4b1b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="os60q4b1b"/>`,
		"fallback": "cbi:bulb-group-classic-hung-3-alt",
	});
}

export default Component;
