import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/l/lwkt2g_ty.css';
import '../../css/r/rc4-7gb_q.css';
import '../../css/f/fcuf7fb5f.css';
import '../../css/a/afaviu-7d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="lwkt2g_ty wm-deco"/><path class="rc4-7gb_q wm-deco"/><path class="fcuf7fb5f wm-k"/><path class="afaviu-7d wm-a"/></g>`,
		"fallback": "withicons:crosshair-blueprint",
	});
}

export default Component;
