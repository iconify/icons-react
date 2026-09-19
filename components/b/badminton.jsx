import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tr36qhbyi.css';
import '../../css/n/n57v3hv5h.css';
import '../../css/j/j29fesh0b.css';
import '../../css/j/jwka2g0il.css';
import '../../css/r/rq2ykxb0g.css';
import '../../css/a/ar8tkgbzr.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tr36qhbyi"><path class="n57v3hv5h"/><path class="j29fesh0b"/><path class="jwka2g0il"/><path class="rq2ykxb0g"/><path class="ar8tkgbzr"/></g>`,
		"fallback": "icon-park:badminton",
	});
}

export default Component;
