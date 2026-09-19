import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bc1fd0lxe.css';
import '../../css/q/q-7r1-bmd.css';
import '../../css/k/kj_hitb4o.css';
import '../../css/s/syrm5jbdq.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<mask id="circleFlagsChm0"><circle class="bc1fd0lxe"/></mask><g mask="url(#circleFlagsChm0)"><path class="q-7r1-bmd"/><path class="kj_hitb4o"/><path class="syrm5jbdq"/></g>`,
		"fallback": "circle-flags:chm",
	});
}

export default Component;
