import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wsbw0xb_e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wsbw0xb_e"/>`,
		"fallback": "tabler:arrows-double-se-nw",
	});
}

export default Component;
