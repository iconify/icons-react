import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q0n85kb1f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="q0n85kb1f"/>`,
		"fallback": "solar:hearts-outline",
	});
}

export default Component;
