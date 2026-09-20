import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d5w6-e3-b.css';
import '../../css/i/i7sr6ubzr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d5w6-e3-b"/><path class="i7sr6ubzr"/>`,
		"fallback": "pixel:bullet-list-solid",
	});
}

export default Component;
