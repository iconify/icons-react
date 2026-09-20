import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h4csfvb-f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h4csfvb-f"/>`,
		"fallback": "uil:angle-up",
	});
}

export default Component;
