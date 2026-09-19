import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eo3513bri.css';

const viewBox = {"width":30,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eo3513bri"/>`,
		"fallback": "fontisto:american-sign-language-interpreting",
	});
}

export default Component;
