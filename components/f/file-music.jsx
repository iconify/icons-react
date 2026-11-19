import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/lwfqisbuc.css';
import '../../css/f/f2w4bztzq.css';
import '../../css/b/buc07obpx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="lwfqisbuc"/><path class="f2w4bztzq"/><path class="buc07obpx"/></g>`,
		"fallback": "andrsrxn:file-music",
	});
}

export default Component;
