import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/jbuo745ut.css';
import '../../css/j/jibkylakw.css';
import '../../css/u/uhzthdcln.css';
import '../../css/c/c_hggkbji.css';
import '../../css/f/ffwt03rkd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="jbuo745ut wm-k"/><path class="jibkylakw wm-k"/><path class="uhzthdcln wm-k"/><path class="c_hggkbji wm-shine"/><path class="ffwt03rkd wm-a"/></g>`,
		"fallback": "withicons-anime:dumpling",
	});
}

export default Component;
