import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/syavd4j4s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="syavd4j4s"/>`,
		"fallback": "ri:arrow-down-box-fill",
	});
}

export default Component;
