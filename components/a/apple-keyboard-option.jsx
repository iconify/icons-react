import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rdo397bby.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rdo397bby"/>`,
		"fallback": "mdi:apple-keyboard-option",
	});
}

export default Component;
