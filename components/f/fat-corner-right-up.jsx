import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j096u3bfx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j096u3bfx"/>`,
		"fallback": "mynaui:fat-corner-right-up",
	});
}

export default Component;
