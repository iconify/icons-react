import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k1y6j3b9w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k1y6j3b9w"/>`,
		"fallback": "pixelarticons:braces-content-sharp",
	});
}

export default Component;
