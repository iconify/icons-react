import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fwn4e46yu.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="fwn4e46yu"/>`,
		"fallback": "streamline-color:arrow-curvy-up-down-2-flat",
	});
}

export default Component;
