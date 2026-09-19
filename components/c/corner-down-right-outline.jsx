import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mok1onfec.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mok1onfec"/>`,
		"fallback": "eva:corner-down-right-outline",
	});
}

export default Component;
