import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f3_-5u1bi.css';
import '../../css/s/sb5p6obzi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f3_-5u1bi"/><path class="sb5p6obzi"/>`,
		"fallback": "streamline-ultimate:calendar-3-bold",
	});
}

export default Component;
