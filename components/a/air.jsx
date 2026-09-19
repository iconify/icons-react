import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w72f55b3o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w72f55b3o"/>`,
		"fallback": "boxicons:air",
	});
}

export default Component;
