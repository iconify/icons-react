import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pdzi00bpt.css';
import '../../css/g/g39-95b8q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pdzi00bpt"/><path class="g39-95b8q"/>`,
		"fallback": "bx:bx-chevron-right-square",
	});
}

export default Component;
