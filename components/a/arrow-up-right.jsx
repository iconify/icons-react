import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/an0e7536v.css';
import '../../css/o/o5w2f1uww.css';
import '../../css/u/umh0ngbrr.css';
import '../../css/d/do2d_cw5r.css';
import '../../css/j/j_zv1xxot.css';
import '../../css/q/q4y18jbkf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="an0e7536v wm-shadow"/><path class="o5w2f1uww wm-k"/><path class="umh0ngbrr wm-k"/><path class="do2d_cw5r wm-k"/><path class="j_zv1xxot wm-k"/><path class="q4y18jbkf wm-shine"/>`,
		"fallback": "withicons-pastel:arrow-up-right",
	});
}

export default Component;
