import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pahc-5tby.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="pahc-5tby"/>`,
		"fallback": "streamline:dices-entertainment-gaming-dices-solid",
	});
}

export default Component;
