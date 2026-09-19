import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vqcqgd4pf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="vqcqgd4pf"/>`,
		"fallback": "griddy-icons:credit-card-cancel-alt",
	});
}

export default Component;
