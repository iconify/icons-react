import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/e/e1e5nwbtg.css';
import '../../css/j/jd-tv257l.css';
import '../../css/n/n9oyagb4p.css';
import '../../css/c/c1tkw--rs.css';
import '../../css/f/f4-qfh4mt.css';
import '../../css/i/i14ho346r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="e1e5nwbtg wm-k"/><path class="jd-tv257l wm-a"/><path class="n9oyagb4p wm-shadow"/><path class="c1tkw--rs wm-k"/><path class="f4-qfh4mt wm-a"/><path class="i14ho346r wm-s"/></g>`,
		"fallback": "withicons:battery-charging-engrave",
	});
}

export default Component;
