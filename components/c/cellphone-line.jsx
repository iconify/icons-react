import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wbx9ybmbc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wbx9ybmbc"/>`,
		"fallback": "ri:cellphone-line",
	});
}

export default Component;
