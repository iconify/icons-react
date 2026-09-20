import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ia1z01kke.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ia1z01kke"/>`,
		"fallback": "pixelarticons:file-off",
	});
}

export default Component;
