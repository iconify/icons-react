import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/exu4375zu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="exu4375zu"/>`,
		"fallback": "boxicons:headphone-alt",
	});
}

export default Component;
