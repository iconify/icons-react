import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fx70z0b6v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fx70z0b6v"/>`,
		"fallback": "keyline-icons:circle-chevrons-up-fill",
	});
}

export default Component;
