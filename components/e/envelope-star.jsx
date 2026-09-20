import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fr62-8pji.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fr62-8pji"/>`,
		"fallback": "uil:envelope-star",
	});
}

export default Component;
