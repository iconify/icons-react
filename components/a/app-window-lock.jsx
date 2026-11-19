import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/benm2f54l.css';
import '../../css/y/y2q51wbsk.css';
import '../../css/c/c0kc3m79n.css';
import '../../css/s/suvit2b_v.css';
import '../../css/f/fbf6vejam.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="benm2f54l"/><path class="y2q51wbsk"/><path class="c0kc3m79n"/><path class="suvit2b_v"/><path class="fbf6vejam"/></g>`,
		"fallback": "andrsrxn:app-window-lock",
	});
}

export default Component;
