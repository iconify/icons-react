import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wbo7v2b1z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wbo7v2b1z"/>`,
		"fallback": "ri:dingding-line",
	});
}

export default Component;
