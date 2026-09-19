import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/irm7knmrx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="irm7knmrx"/>`,
		"fallback": "iconoir:input-field",
	});
}

export default Component;
