import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fp882eb7v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="fp882eb7v"/>`,
		"fallback": "griddy-icons:halloween-spider-filled",
	});
}

export default Component;
