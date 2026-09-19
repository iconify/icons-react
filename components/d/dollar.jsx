import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rggfaqb6e.css';
import '../../css/s/szr1vwbtd.css';
import '../../css/q/qq28i-bij.css';
import '../../css/d/d821ukbnf.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="rggfaqb6e"><path class="szr1vwbtd"/><path class="qq28i-bij"/><path class="d821ukbnf"/></g>`,
		"fallback": "icon-park:dollar",
	});
}

export default Component;
