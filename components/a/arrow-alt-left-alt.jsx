import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bm1j5hbcz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bm1j5hbcz"/>`,
		"fallback": "lets-icons:arrow-alt-left-alt",
	});
}

export default Component;
