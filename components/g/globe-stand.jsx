import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n-ltem8ez.css';
import '../../css/p/p-0vs8b_z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n-ltem8ez"/><path class="p-0vs8b_z"/>`,
		"fallback": "boxicons:globe-stand",
	});
}

export default Component;
