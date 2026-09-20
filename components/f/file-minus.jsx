import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fgaw-li2k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fgaw-li2k"/>`,
		"fallback": "pixelarticons:file-minus",
	});
}

export default Component;
