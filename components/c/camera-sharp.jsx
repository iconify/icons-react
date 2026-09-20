import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/ppplzd1pw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ppplzd1pw"/>`,
		"fallback": "pixelarticons:camera-sharp",
	});
}

export default Component;
