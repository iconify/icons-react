import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l-5ouesik.css';
import '../../css/t/t769_3bun.css';
import '../../css/c/cw-361y7q.css';
import '../../css/j/jn8qy4bru.css';
import '../../css/g/g7l803b2i.css';
import '../../css/k/kirev_bvu.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l-5ouesik"/><path class="t769_3bun"/><path class="cw-361y7q"/><g class="jn8qy4bru"><path class="g7l803b2i"/><path class="kirev_bvu"/></g>`,
		"fallback": "openmoji:champignon-white",
	});
}

export default Component;
