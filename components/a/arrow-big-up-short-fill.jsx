import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pzt2xnggt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pzt2xnggt"/>`,
		"fallback": "keyline-icons:arrow-big-up-short-fill",
	});
}

export default Component;
