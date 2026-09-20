import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rroqv4b5b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="rroqv4b5b"/>`,
		"fallback": "keyline-icons:circle-question-sharp-fill",
	});
}

export default Component;
