import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j_sk32p-h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j_sk32p-h"/>`,
		"fallback": "keyline-icons:caret-right",
	});
}

export default Component;
