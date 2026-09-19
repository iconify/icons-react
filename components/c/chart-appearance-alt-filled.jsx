import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9e_ecbxx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="y9e_ecbxx"/>`,
		"fallback": "griddy-icons:chart-appearance-alt-filled",
	});
}

export default Component;
