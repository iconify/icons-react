import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gs3tcib1t.css';
import '../../css/e/e8yz86-ku.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gs3tcib1t"/><path class="e8yz86-ku"/>`,
		"fallback": "tdesign:dvd-filled",
	});
}

export default Component;
