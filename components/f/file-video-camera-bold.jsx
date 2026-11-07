import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t8q5j9dzg.css';
import '../../css/w/wm3j448rr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="t8q5j9dzg"/><path class="wm3j448rr"/>`,
		"fallback": "solar:file-video-camera-bold",
	});
}

export default Component;
