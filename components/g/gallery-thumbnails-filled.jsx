import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d0fu8dkns.css';
import '../../css/y/y66poj2zc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<rect class="d0fu8dkns"/><path class="y66poj2zc"/>`,
		"fallback": "boxicons:gallery-thumbnails-filled",
	});
}

export default Component;
