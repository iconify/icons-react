import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oht4ataxm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oht4ataxm"/>`,
		"fallback": "pixel:handshake",
	});
}

export default Component;
