import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rggfaqb6e.css';
import '../../css/i/ih70uj44i.css';
import '../../css/k/ktt-wx2-u.css';
import '../../css/e/e99vyzbrd.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="rggfaqb6e"><path class="ih70uj44i"/><path class="ktt-wx2-u"/><path class="e99vyzbrd"/></g>`,
		"fallback": "icon-park:font-size",
	});
}

export default Component;
