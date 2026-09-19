import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tr36qhbyi.css';
import '../../css/z/zr7n3acyx.css';
import '../../css/c/ccpbi1pnf.css';
import '../../css/r/rwrx2052m.css';
import '../../css/c/c1wo79b4c.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tr36qhbyi"><path class="zr7n3acyx"/><path class="ccpbi1pnf"/><path class="rwrx2052m"/><path class="c1wo79b4c"/></g>`,
		"fallback": "icon-park:diving-suit",
	});
}

export default Component;
