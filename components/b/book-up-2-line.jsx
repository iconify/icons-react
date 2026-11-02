import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dm_8amnbk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dm_8amnbk"/>`,
		"fallback": "mingcute:book-up-2-line",
	});
}

export default Component;
