import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mx-q0sdjp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="mx-q0sdjp"/>`,
		"fallback": "reicon:cardholder-filled",
	});
}

export default Component;
