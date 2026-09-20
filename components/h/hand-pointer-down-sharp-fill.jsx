import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q_1jzeb-l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="q_1jzeb-l"/>`,
		"fallback": "keyline-icons:hand-pointer-down-sharp-fill",
	});
}

export default Component;
