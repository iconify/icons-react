import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/d7kjkhb6x.css';
import '../../css/q/qk4flbb6u.css';
import '../../css/f/f2ju90u-t.css';
import '../../css/z/zapwtgb_o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="d7kjkhb6x"/><path class="qk4flbb6u"/><path class="f2ju90u-t"/><path class="zapwtgb_o"/></g>`,
		"fallback": "andrsrxn:image-sparkle",
	});
}

export default Component;
