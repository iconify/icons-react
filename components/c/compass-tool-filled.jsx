import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h7f0qgbcj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h7f0qgbcj"/>`,
		"fallback": "boxicons:compass-tool-filled",
	});
}

export default Component;
