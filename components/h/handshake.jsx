import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gt030hb-n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gt030hb-n"/>`,
		"fallback": "boxicons:handshake",
	});
}

export default Component;
