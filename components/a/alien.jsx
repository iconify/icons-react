import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lhai0s2xq.css';
import '../../css/a/agy98qb0z.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lhai0s2xq"/><path class="agy98qb0z"/>`,
		"fallback": "fxemoji:alien",
	});
}

export default Component;
