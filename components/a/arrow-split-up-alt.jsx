import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m6l75qjgp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="m6l75qjgp"/>`,
		"fallback": "griddy-icons:arrow-split-up-alt",
	});
}

export default Component;
