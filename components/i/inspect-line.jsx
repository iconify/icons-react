import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ydruqtj8s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ydruqtj8s"/>`,
		"fallback": "mingcute:inspect-line",
	});
}

export default Component;
