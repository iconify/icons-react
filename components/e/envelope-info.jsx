import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ue7a0iekt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ue7a0iekt"/>`,
		"fallback": "uil:envelope-info",
	});
}

export default Component;
