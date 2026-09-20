import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qr3roy_bu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qr3roy_bu"/>`,
		"fallback": "ri:basketball-line",
	});
}

export default Component;
