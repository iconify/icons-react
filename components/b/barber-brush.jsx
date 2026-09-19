import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rggfaqb6e.css';
import '../../css/t/t1m-3cbyl.css';
import '../../css/t/trekx0bes.css';
import '../../css/q/qw89o1y-d.css';
import '../../css/l/lwni21xog.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="rggfaqb6e"><path class="t1m-3cbyl"/><path class="trekx0bes"/><path class="qw89o1y-d"/><path class="lwni21xog"/></g>`,
		"fallback": "icon-park:barber-brush",
	});
}

export default Component;
