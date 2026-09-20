import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zucl2ub5q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zucl2ub5q"/>`,
		"fallback": "simple-icons:abusedotch",
	});
}

export default Component;
