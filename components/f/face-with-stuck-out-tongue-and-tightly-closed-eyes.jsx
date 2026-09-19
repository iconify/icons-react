import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wyscs09jg.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wyscs09jg"/>`,
		"fallback": "dinkie-icons:face-with-stuck-out-tongue-and-tightly-closed-eyes",
	});
}

export default Component;
