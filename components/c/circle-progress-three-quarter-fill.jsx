import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qefui5bav.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qefui5bav"/>`,
		"fallback": "keyline-icons:circle-progress-three-quarter-fill",
	});
}

export default Component;
