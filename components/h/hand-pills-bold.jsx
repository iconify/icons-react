import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/k/kb52udbpq.css';
import '../../css/v/vnvma0bxu.css';
import '../../css/f/f7vt13bol.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="kb52udbpq"/><path class="vnvma0bxu"/><path class="f7vt13bol"/></g>`,
		"fallback": "solar:hand-pills-bold",
	});
}

export default Component;
