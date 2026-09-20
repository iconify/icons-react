import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h88i13w-s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h88i13w-s"/>`,
		"fallback": "tabler:circle-rectangle-filled",
	});
}

export default Component;
