import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/in57ir3hv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="in57ir3hv"/>`,
		"fallback": "griddy-icons:eftpos-alt-filled",
	});
}

export default Component;
