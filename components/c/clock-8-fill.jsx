import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ethbpkbns.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ethbpkbns"/>`,
		"fallback": "keyline-icons:clock-8-fill",
	});
}

export default Component;
