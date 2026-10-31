import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mp30w0h8o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mp30w0h8o"/>`,
		"fallback": "coolicons:circle-help-fill-round",
	});
}

export default Component;
