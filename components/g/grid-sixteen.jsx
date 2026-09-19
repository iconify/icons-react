import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vm3ivccum.css';
import '../../css/h/hl30v4bui.css';
import '../../css/q/q92edjb1p.css';
import '../../css/u/uz7tbce5r.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="vm3ivccum"><rect class="hl30v4bui"/><path class="q92edjb1p"/><path class="uz7tbce5r"/></g>`,
		"fallback": "icon-park-outline:grid-sixteen",
	});
}

export default Component;
