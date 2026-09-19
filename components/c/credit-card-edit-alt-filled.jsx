import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kl04e0ban.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="kl04e0ban"/>`,
		"fallback": "griddy-icons:credit-card-edit-alt-filled",
	});
}

export default Component;
