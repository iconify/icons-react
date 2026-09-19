import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qr2w7xw8k.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qr2w7xw8k"/>`,
		"fallback": "dinkie-icons:die-face6",
	});
}

export default Component;
