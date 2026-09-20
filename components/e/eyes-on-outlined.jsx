import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dg9j3pb4h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dg9j3pb4h"/>`,
		"fallback": "weui:eyes-on-outlined",
	});
}

export default Component;
