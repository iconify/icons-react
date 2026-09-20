import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eci9ug11m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eci9ug11m"/>`,
		"fallback": "mingcute:hight-beam-headlights-line",
	});
}

export default Component;
