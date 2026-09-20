import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w2dvr6buw.css';
import '../../css/x/xw7gk0pnm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w2dvr6buw"/><path class="xw7gk0pnm"/>`,
		"fallback": "tdesign:camera-filled",
	});
}

export default Component;
