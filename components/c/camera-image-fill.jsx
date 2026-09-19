import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jew4uiv9f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="jew4uiv9f"/>`,
		"fallback": "iconamoon:camera-image-fill",
	});
}

export default Component;
