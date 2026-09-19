import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gldgrx7rq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gldgrx7rq"/>`,
		"fallback": "bx:female-sign",
	});
}

export default Component;
