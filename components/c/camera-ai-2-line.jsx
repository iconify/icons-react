import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zll1bu97z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zll1bu97z"/>`,
		"fallback": "ri:camera-ai-2-line",
	});
}

export default Component;
