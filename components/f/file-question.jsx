import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/eugxuac1i.css';
import '../../css/v/vnmee-0-u.css';
import '../../css/r/rr5qk4nov.css';
import '../../css/s/sos1yebgd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="eugxuac1i"/><path class="vnmee-0-u"/><path class="rr5qk4nov"/><path class="sos1yebgd"/></g>`,
		"fallback": "andrsrxn:file-question",
	});
}

export default Component;
