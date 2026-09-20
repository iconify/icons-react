import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pzq7f1bth.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pzq7f1bth"/>`,
		"fallback": "keyline-icons:app-check",
	});
}

export default Component;
