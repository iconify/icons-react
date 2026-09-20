import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yul2wvb3a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="yul2wvb3a"/>`,
		"fallback": "solar:camera-rotate-outline",
	});
}

export default Component;
