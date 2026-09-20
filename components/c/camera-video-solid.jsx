import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rfsl22bog.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="rfsl22bog"/>`,
		"fallback": "streamline-sharp:camera-video-solid",
	});
}

export default Component;
