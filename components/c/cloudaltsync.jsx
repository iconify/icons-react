import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uv_0-ekbd.css';

const viewBox = {"width":1024,"height":768};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uv_0-ekbd"/>`,
		"fallback": "whh:cloudaltsync",
	});
}

export default Component;
