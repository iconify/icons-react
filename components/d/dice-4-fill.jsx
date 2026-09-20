import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n878sudbr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="n878sudbr"/>`,
		"fallback": "keyline-icons:dice-4-fill",
	});
}

export default Component;
