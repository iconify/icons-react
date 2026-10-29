import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/n/n3r3aob5w.css';
import '../../css/j/jg1pj_v2g.css';
import '../../css/p/pfodkzbrw.css';
import '../../css/d/dg5kmnbiz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="n3r3aob5w"/><path class="jg1pj_v2g wm-shadow"/><path class="pfodkzbrw"/><path class="dg5kmnbiz"/></g>`,
		"fallback": "withicons:fireplace-engrave",
	});
}

export default Component;
