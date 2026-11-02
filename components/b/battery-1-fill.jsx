import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iq8vp4b9f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iq8vp4b9f"/>`,
		"fallback": "mingcute:battery-1-fill",
	});
}

export default Component;
