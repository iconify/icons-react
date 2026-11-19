import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/p_isqubrv.css';
import '../../css/o/oimhr48-p.css';
import '../../css/c/cn1pfccgu.css';
import '../../css/l/lpka66bfm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="p_isqubrv"/><path class="oimhr48-p"/><path class="cn1pfccgu"/><path class="lpka66bfm"/></g>`,
		"fallback": "andrsrxn:file-warning",
	});
}

export default Component;
