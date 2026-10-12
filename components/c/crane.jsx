import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/avslw3hjm.css';
import '../../css/i/i1c27o17l.css';
import '../../css/b/b2r19cbqk.css';
import '../../css/x/x7i_i-bui.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><rect class="avslw3hjm"/><path class="i1c27o17l"/><rect class="b2r19cbqk"/><path class="x7i_i-bui"/></g>`,
		"fallback": "andrsrxn:crane",
	});
}

export default Component;
