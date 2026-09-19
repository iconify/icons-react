import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x30i7ibvc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="x30i7ibvc"/>`,
		"fallback": "griddy-icons:credit-card-check-alt-filled",
	});
}

export default Component;
