import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q4qr5-bbh.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="q4qr5-bbh"/>`,
		"fallback": "streamline:inbox-favorite-solid",
	});
}

export default Component;
