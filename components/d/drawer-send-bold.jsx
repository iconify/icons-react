import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vq87f3h9c.css';
import '../../css/d/d4ywfcbbj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vq87f3h9c"/><path class="d4ywfcbbj"/>`,
		"fallback": "streamline-ultimate:drawer-send-bold",
	});
}

export default Component;
