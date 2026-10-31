import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/s/sonegh7xo.css';
import '../../css/w/w92yhnbeq.css';
import '../../css/t/tpxbl5_6d.css';
import '../../css/b/b1e4x0bzx.css';
import '../../css/q/q8gipzxgs.css';
import '../../css/p/pt2w9256h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="sonegh7xo wm-shadow"/><path class="w92yhnbeq wm-shadow"/><path class="tpxbl5_6d"/><path class="b1e4x0bzx"/><path class="q8gipzxgs"/><path class="pt2w9256h wm-s"/></g>`,
		"fallback": "withicons-brutal:flip-horizontal",
	});
}

export default Component;
