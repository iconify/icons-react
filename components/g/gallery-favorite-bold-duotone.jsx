import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jhvzr3pxx.css';
import '../../css/v/vwvsfxegk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jhvzr3pxx"/><path clip-rule="evenodd" class="vwvsfxegk"/>`,
		"fallback": "solar:gallery-favorite-bold-duotone",
	});
}

export default Component;
