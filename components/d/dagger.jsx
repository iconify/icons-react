import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zgm50yc_s.css';
import '../../css/r/rjvu1wn-k.css';
import '../../css/n/nbudjgbrb.css';
import '../../css/g/gecge6__a.css';
import '../../css/j/jn8qy4bru.css';
import '../../css/m/m4-6vibjc.css';
import '../../css/p/pb83nccyn.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zgm50yc_s"/><path class="rjvu1wn-k"/><path class="nbudjgbrb"/><path class="gecge6__a"/><g class="jn8qy4bru"><path class="m4-6vibjc"/><path class="pb83nccyn"/></g>`,
		"fallback": "openmoji:dagger",
	});
}

export default Component;
