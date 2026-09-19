import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rggfaqb6e.css';
import '../../css/n/n9rbf1bht.css';
import '../../css/m/m01t94b2t.css';
import '../../css/k/km16y_bdy.css';
import '../../css/x/xedkehooy.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="rggfaqb6e"><path class="n9rbf1bht"/><path class="m01t94b2t"/><path class="km16y_bdy"/><path class="xedkehooy"/></g>`,
		"fallback": "icon-park:christmas-tree",
	});
}

export default Component;
