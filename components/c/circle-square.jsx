import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i_n-l9b2x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i_n-l9b2x"/>`,
		"fallback": "keyline-icons:circle-square",
	});
}

export default Component;
