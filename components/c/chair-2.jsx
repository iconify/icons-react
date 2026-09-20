import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k2u665ban.css';
import '../../css/w/w-93zx3lf.css';
import '../../css/l/lon5idl_r.css';
import '../../css/x/xis439w_h.css';
import '../../css/v/vrygyxdio.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="k2u665ban"><path class="w-93zx3lf"/><path class="lon5idl_r"/><path class="xis439w_h"/><path class="vrygyxdio"/></g>`,
		"fallback": "streamline-sharp-color:chair-2",
	});
}

export default Component;
