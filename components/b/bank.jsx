import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f0cpq5b7o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="f0cpq5b7o"/>`,
		"fallback": "griddy-icons:bank",
	});
}

export default Component;
