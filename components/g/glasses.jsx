import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b8o6dfo_j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b8o6dfo_j"/>`,
		"fallback": "withicons:glasses",
	});
}

export default Component;
