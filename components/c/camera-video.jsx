import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fmf4_8bky.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fmf4_8bky"/>`,
		"fallback": "streamline-flex:camera-video",
	});
}

export default Component;
