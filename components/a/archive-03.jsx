import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b2e31-bzn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b2e31-bzn"/>`,
		"fallback": "hugeicons:archive-03",
	});
}

export default Component;
