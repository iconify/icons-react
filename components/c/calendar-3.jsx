import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/l/lx6sfha5x.css';
import '../../css/q/qz0s-uf3y.css';
import '../../css/b/bukhfnboa.css';

const viewBox = {"width":17,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="bi12bsetm"><path class="lx6sfha5x"/><path class="qz0s-uf3y"/><path class="bukhfnboa"/></g>`,
		"fallback": "si-glyph:calendar-3",
	});
}

export default Component;
