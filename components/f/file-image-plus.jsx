import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/frt9vwbkr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="frt9vwbkr"/>`,
		"fallback": "noviair-light:file-image-plus",
	});
}

export default Component;
