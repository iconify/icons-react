import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zywrhvb8y.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zywrhvb8y"/>`,
		"fallback": "streamline:computer-connection-bluetooth-bluetooth-internet-server-network-wireless",
	});
}

export default Component;
