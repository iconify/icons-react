import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rggfaqb6e.css';
import '../../css/k/ktt-wx2-u.css';
import '../../css/l/l0ug14bvz.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="rggfaqb6e"><path class="ktt-wx2-u"/><path class="l0ug14bvz"/></g>`,
		"fallback": "icon-park:arrow-up",
	});
}

export default Component;
