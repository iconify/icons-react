import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fji8a4b_r.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="fji8a4b_r"/>`,
		"fallback": "streamline:baggage-solid",
	});
}

export default Component;
