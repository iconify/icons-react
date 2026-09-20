import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hneyai_ge.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hneyai_ge"/>`,
		"fallback": "ri:celsius-line",
	});
}

export default Component;
