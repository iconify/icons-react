import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hlouh3b5j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hlouh3b5j"/>`,
		"fallback": "ri:camera-ai-fill",
	});
}

export default Component;
