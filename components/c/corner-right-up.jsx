import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qjrx52b8u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qjrx52b8u"/>`,
		"fallback": "tabler:corner-right-up",
	});
}

export default Component;
