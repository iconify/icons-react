import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tt1lx2bmz.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tt1lx2bmz"/>`,
		"fallback": "garden:grid-2x2-stroke-20",
	});
}

export default Component;
