import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/a/a6px813am.css';
import '../../css/c/crmh4jb3k.css';
import '../../css/d/dzyifob1l.css';
import '../../css/m/mqvbkn2ps.css';
import '../../css/s/s_68tcbbz.css';
import '../../css/u/u6j-ucc7b.css';
import '../../css/p/po0_cib-q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="a6px813am wm-shadow"/><path class="crmh4jb3k wm-shadow"/><path class="dzyifob1l"/><path class="mqvbkn2ps"/><path class="s_68tcbbz"/><path class="u6j-ucc7b"/><path class="po0_cib-q"/></g>`,
		"fallback": "withicons-brutal:chart-bar",
	});
}

export default Component;
