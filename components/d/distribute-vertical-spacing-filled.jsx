import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kgds8ynox.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="kgds8ynox"/>`,
		"fallback": "griddy-icons:distribute-vertical-spacing-filled",
	});
}

export default Component;
