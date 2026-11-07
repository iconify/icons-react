import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kbuco0-ab.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="kbuco0-ab"/>`,
		"fallback": "solar:hourglass-outline",
	});
}

export default Component;
