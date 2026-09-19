import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vim6mcbhb.css';
import '../../css/h/hndh_kb3e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vim6mcbhb"/><path clip-rule="evenodd" class="hndh_kb3e"/>`,
		"fallback": "basil:android-outline",
	});
}

export default Component;
