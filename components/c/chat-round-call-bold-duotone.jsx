import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pip5km_vy.css';
import '../../css/q/qnmkjnbmb.css';
import '../../css/y/yd0a0cc6y.css';
import '../../css/l/leb1eob0y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pip5km_vy"/><path clip-rule="evenodd" class="qnmkjnbmb"/><path clip-rule="evenodd" class="yd0a0cc6y"/><path class="leb1eob0y"/>`,
		"fallback": "solar:chat-round-call-bold-duotone",
	});
}

export default Component;
