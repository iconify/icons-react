import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q0612-4uu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q0612-4uu"/>`,
		"fallback": "simple-icons:ffmpeg",
	});
}

export default Component;
