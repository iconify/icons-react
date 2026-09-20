import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n428f-bef.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n428f-bef"/>`,
		"fallback": "pixelarticons:align-center-vertical-sharp",
	});
}

export default Component;
