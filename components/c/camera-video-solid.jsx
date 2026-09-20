import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/ptvslewit.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ptvslewit"/>`,
		"fallback": "streamline-flex:camera-video-solid",
	});
}

export default Component;
