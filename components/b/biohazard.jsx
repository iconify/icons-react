import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/jee7hpbow.css';
import '../../css/p/p9px8u56a.css';
import '../../css/l/lz_u1t7px.css';
import '../../css/r/ryok99ncs.css';
import '../../css/a/aak5b2-gv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><circle class="jee7hpbow"/><circle class="p9px8u56a"/><path class="lz_u1t7px"/><path class="ryok99ncs"/><path class="aak5b2-gv"/></g>`,
		"fallback": "andrsrxn:biohazard",
	});
}

export default Component;
