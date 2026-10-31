import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/k4hnscc4t.css';
import '../../css/u/up5adhcwo.css';
import '../../css/e/eu71eo3pf.css';
import '../../css/h/hjskit52j.css';
import '../../css/m/mmf-ceb-u.css';
import '../../css/x/xd8o7hb4w.css';
import '../../css/r/rrtfk_bzk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="k4hnscc4t wm-shadow"/><path class="up5adhcwo"/><path class="eu71eo3pf"/><path class="hjskit52j"/><path class="mmf-ceb-u"/><path class="xd8o7hb4w"/><path class="rrtfk_bzk wm-shine"/></g>`,
		"fallback": "withicons-luxe:at-sign",
	});
}

export default Component;
