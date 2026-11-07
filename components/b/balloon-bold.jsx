import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vtwkzehzt.css';
import '../../css/h/hp4q8k9dq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vtwkzehzt"/><path clip-rule="evenodd" class="hp4q8k9dq"/>`,
		"fallback": "solar:balloon-bold",
	});
}

export default Component;
