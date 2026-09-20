import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/slt9h2sfr.css';
import '../../css/m/mb1qa7yge.css';
import '../../css/y/y_30nsbnm.css';
import '../../css/v/v02jaaceo.css';
import '../../css/j/jn8qy4bru.css';
import '../../css/r/ret0owbdq.css';
import '../../css/u/uyy1jf0xu.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="slt9h2sfr"/><path class="mb1qa7yge"/><path class="y_30nsbnm"/><path class="v02jaaceo"/><g class="jn8qy4bru"><path class="ret0owbdq"/><path class="uyy1jf0xu"/></g>`,
		"fallback": "openmoji:bucket",
	});
}

export default Component;
