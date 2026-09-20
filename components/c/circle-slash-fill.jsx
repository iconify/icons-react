import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/to1fr9hry.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="to1fr9hry"/>`,
		"fallback": "keyline-icons:circle-slash-fill",
	});
}

export default Component;
