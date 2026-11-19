import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/mf6xtjb9g.css';
import '../../css/x/x3__3mamu.css';
import '../../css/k/kn4p2c-tz.css';
import '../../css/y/y1njv_beh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="mf6xtjb9g"/><path class="x3__3mamu"/><path class="kn4p2c-tz"/><path class="y1njv_beh"/></g>`,
		"fallback": "andrsrxn:creative-commons-remix",
	});
}

export default Component;
