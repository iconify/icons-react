import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rggfaqb6e.css';
import '../../css/a/a287lnbhf.css';
import '../../css/r/rgpfwjbgz.css';
import '../../css/p/p8o016kgn.css';
import '../../css/e/ew936lb8l.css';
import '../../css/j/jwqm-7brh.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="rggfaqb6e"><path class="a287lnbhf"/><path class="rgpfwjbgz"/><path class="p8o016kgn"/><path class="ew936lb8l"/><path class="jwqm-7brh"/></g>`,
		"fallback": "icon-park:download-computer",
	});
}

export default Component;
