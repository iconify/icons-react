import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t1ao6026r.css';
import '../../css/c/cf3z5jfwx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t1ao6026r"/><path class="cf3z5jfwx"/>`,
		"fallback": "circum:battery-charging",
	});
}

export default Component;
