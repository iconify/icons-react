import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wvc9u6bgk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wvc9u6bgk"/>`,
		"fallback": "mdi-light:diamond",
	});
}

export default Component;
