import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hbnrmob7o.css';
import '../../css/i/innfph8at.css';
import '../../css/o/obxwvy6ez.css';
import '../../css/f/flrav7fti.css';
import '../../css/r/r-4avvaah.css';
import '../../css/k/kx-d1ablo.css';
import '../../css/j/j2-uv0k4e.css';
import '../../css/s/s4b-3abts.css';
import '../../css/w/wf6njux6l.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hbnrmob7o"/><path class="innfph8at"/><path class="obxwvy6ez"/><path class="flrav7fti"/><path class="r-4avvaah"/><path class="kx-d1ablo"/><path class="j2-uv0k4e"/><path class="s4b-3abts"/><path class="wf6njux6l"/>`,
		"fallback": "icon-park:application-menu",
	});
}

export default Component;
