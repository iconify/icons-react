import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lqi5z1bkf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lqi5z1bkf"/>`,
		"fallback": "boxicons:globe-oceania-filled",
	});
}

export default Component;
