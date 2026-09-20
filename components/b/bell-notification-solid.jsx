import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bf4sslb2p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="bf4sslb2p"/>`,
		"fallback": "streamline-sharp:bell-notification-solid",
	});
}

export default Component;
