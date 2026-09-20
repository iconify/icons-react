import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/clgqjf2qn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="clgqjf2qn"/>`,
		"fallback": "pixelarticons:gmail",
	});
}

export default Component;
