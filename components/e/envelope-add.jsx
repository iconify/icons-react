import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e7fm78wil.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e7fm78wil"/>`,
		"fallback": "uil:envelope-add",
	});
}

export default Component;
