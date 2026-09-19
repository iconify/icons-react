import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jiqsblbdi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jiqsblbdi"/>`,
		"fallback": "bx:hard-hat",
	});
}

export default Component;
