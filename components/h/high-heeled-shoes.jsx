import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rggfaqb6e.css';
import '../../css/w/w_9oj7b3z.css';
import '../../css/z/zwzidzbmk.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="rggfaqb6e"><path class="w_9oj7b3z"/><path class="zwzidzbmk"/></g>`,
		"fallback": "icon-park:high-heeled-shoes",
	});
}

export default Component;
