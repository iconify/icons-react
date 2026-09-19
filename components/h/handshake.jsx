import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m-2n3qbev.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m-2n3qbev"/>`,
		"fallback": "dinkie-icons:handshake",
	});
}

export default Component;
