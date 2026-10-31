import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/wgxujor3o.css';
import '../../css/g/grrd1nb3v.css';
import '../../css/r/r_40qrwdi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="wgxujor3o wm-k"/><path class="grrd1nb3v wm-shine"/><path class="r_40qrwdi wm-shine"/></g>`,
		"fallback": "withicons-lunar:archive",
	});
}

export default Component;
