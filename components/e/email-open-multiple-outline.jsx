import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nu_2z9bjc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nu_2z9bjc"/>`,
		"fallback": "mdi:email-open-multiple-outline",
	});
}

export default Component;
