import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/e/edgc67v_u.css';
import '../../css/x/xgbu7d8cp.css';
import '../../css/d/dkfwodbso.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="edgc67v_u"/><path class="xgbu7d8cp"/><path class="dkfwodbso"/></g>`,
		"fallback": "streamline-freehand:hard-drive-warning",
	});
}

export default Component;
