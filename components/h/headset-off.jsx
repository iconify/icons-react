import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/th_20f-bj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="th_20f-bj"/>`,
		"fallback": "keyline-icons:headset-off",
	});
}

export default Component;
