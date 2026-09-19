import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mxnw4-snz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mxnw4-snz"/>`,
		"fallback": "akar-icons:home",
	});
}

export default Component;
