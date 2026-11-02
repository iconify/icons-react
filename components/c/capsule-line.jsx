import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/modzxhp8t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="modzxhp8t"/>`,
		"fallback": "mingcute:capsule-line",
	});
}

export default Component;
