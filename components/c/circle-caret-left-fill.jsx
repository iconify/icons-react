import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nd965_b6p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="nd965_b6p"/>`,
		"fallback": "keyline-icons:circle-caret-left-fill",
	});
}

export default Component;
