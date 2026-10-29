import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/f/ftv5at4kc.css';
import '../../css/g/gfnus2l-k.css';
import '../../css/x/xk3bi4f7o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="ftv5at4kc wm-deco"/><path class="gfnus2l-k wm-k"/><path class="wm-a xk3bi4f7o"/></g>`,
		"fallback": "withicons:holly-blueprint",
	});
}

export default Component;
