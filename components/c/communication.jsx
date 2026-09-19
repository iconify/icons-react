import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vm3ivccum.css';
import '../../css/g/gr941wbsm.css';
import '../../css/h/h9rsgyxuw.css';
import '../../css/t/tmslae69u.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="vm3ivccum"><path class="gr941wbsm"/><path class="h9rsgyxuw"/><path class="tmslae69u"/></g>`,
		"fallback": "icon-park-outline:communication",
	});
}

export default Component;
