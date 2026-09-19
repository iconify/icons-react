import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p4_4oj5ld.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p4_4oj5ld"/>`,
		"fallback": "humbleicons:align-objects-center",
	});
}

export default Component;
