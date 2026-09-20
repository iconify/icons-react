import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kohe9ackk.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kohe9ackk"/>`,
		"fallback": "pinhead:ahimsa-hand-on-square",
	});
}

export default Component;
