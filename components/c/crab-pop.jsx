import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/d61n7zbnc.css';
import '../../css/h/h0f7pcckl.css';
import '../../css/p/paf1s496b.css';
import '../../css/z/zeyhh-b4q.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="d61n7zbnc"/><path class="h0f7pcckl"/><path clip-rule="evenodd" class="paf1s496b"/><path class="zeyhh-b4q"/></g>`,
		"fallback": "streamline-kameleon-color:crab-pop",
	});
}

export default Component;
