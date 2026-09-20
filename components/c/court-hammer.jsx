import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wdj1o0xsn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wdj1o0xsn"/>`,
		"fallback": "mdi:court-hammer",
	});
}

export default Component;
