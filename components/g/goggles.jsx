import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i_5xpwxqd.css';
import '../../css/g/gp87-kkrs.css';
import '../../css/t/t4kztubjt.css';
import '../../css/j/jn8qy4bru.css';
import '../../css/p/pgn6ubbtq.css';
import '../../css/a/ao6x-sbqv.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i_5xpwxqd"/><path class="gp87-kkrs"/><path class="t4kztubjt"/><g class="jn8qy4bru"><path class="pgn6ubbtq"/><path class="ao6x-sbqv"/></g>`,
		"fallback": "openmoji:goggles",
	});
}

export default Component;
