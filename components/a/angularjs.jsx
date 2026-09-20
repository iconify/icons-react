import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jxoyierhi.css';
import '../../css/d/dwqux_e7p.css';
import '../../css/w/wozsguqxs.css';
import '../../css/s/sw1ncqnov.css';
import '../../css/q/qgz_s6bxq.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jxoyierhi"/><path class="dwqux_e7p"/><path class="wozsguqxs"/><path class="sw1ncqnov"/><path class="qgz_s6bxq"/>`,
		"fallback": "thesvg-color:angularjs",
	});
}

export default Component;
