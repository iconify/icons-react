import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k2u665ban.css';
import '../../css/g/g_nfofb7y.css';
import '../../css/z/zh3s4go3z.css';
import '../../css/e/e699-fbdt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="k2u665ban"><path class="g_nfofb7y"/><path class="zh3s4go3z"/><path class="e699-fbdt"/></g>`,
		"fallback": "streamline-sharp-color:flashlight",
	});
}

export default Component;
