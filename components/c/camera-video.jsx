import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tboo0eiim.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tboo0eiim"/>`,
		"fallback": "streamline-sharp:camera-video",
	});
}

export default Component;
