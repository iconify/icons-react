import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lpgukv11j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lpgukv11j"/>`,
		"fallback": "mdi:arrow-top-circle-outline",
	});
}

export default Component;
