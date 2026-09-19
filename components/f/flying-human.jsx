import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/h/h1m10_v9q.css';
import '../../css/h/hl3-0tb6x.css';
import '../../css/j/j55g2km1w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="h1m10_v9q"/><path class="hl3-0tb6x"/><path class="j55g2km1w"/></g>`,
		"fallback": "hugeicons:flying-human",
	});
}

export default Component;
