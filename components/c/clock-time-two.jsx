import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t1h7nf7fp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t1h7nf7fp"/>`,
		"fallback": "mdi:clock-time-two",
	});
}

export default Component;
