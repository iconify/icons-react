import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/ld05h-xwh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ld05h-xwh"/>`,
		"fallback": "ri:inbox-archive-line",
	});
}

export default Component;
