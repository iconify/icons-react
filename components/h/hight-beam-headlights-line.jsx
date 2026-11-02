import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/omv4uwkpo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="omv4uwkpo"/>`,
		"fallback": "mingcute:hight-beam-headlights-line",
	});
}

export default Component;
