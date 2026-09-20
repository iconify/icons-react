import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l0u167zly.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="l0u167zly"/>`,
		"fallback": "keyline-icons:dice-6-fill",
	});
}

export default Component;
