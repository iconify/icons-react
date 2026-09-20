import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w4fwx8bcd.css';
import '../../css/k/kp9tsokzs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w4fwx8bcd"/><path class="kp9tsokzs"/>`,
		"fallback": "token:asd",
	});
}

export default Component;
