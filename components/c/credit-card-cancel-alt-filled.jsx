import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k5-90bbqx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="k5-90bbqx"/>`,
		"fallback": "griddy-icons:credit-card-cancel-alt-filled",
	});
}

export default Component;
