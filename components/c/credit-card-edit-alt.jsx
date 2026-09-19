import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vqdrr6ohb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="vqdrr6ohb"/>`,
		"fallback": "griddy-icons:credit-card-edit-alt",
	});
}

export default Component;
