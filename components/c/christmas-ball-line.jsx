import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cxjtsz59o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cxjtsz59o"/>`,
		"fallback": "mingcute:christmas-ball-line",
	});
}

export default Component;
