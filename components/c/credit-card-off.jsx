import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u1043zt8h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="u1043zt8h"/>`,
		"fallback": "griddy-icons:credit-card-off",
	});
}

export default Component;
