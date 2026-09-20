import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/toh_b0f4y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="toh_b0f4y"/>`,
		"fallback": "keyline-icons:banknote-fill",
	});
}

export default Component;
