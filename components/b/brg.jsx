import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/loc77xbtr.css';
import '../../css/d/d0ipc7b7r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="loc77xbtr"/><path class="d0ipc7b7r"/>`,
		"fallback": "token:brg",
	});
}

export default Component;
