import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rvnqahb0g.css';
import '../../css/y/ys28wsbhb.css';
import '../../css/e/eqr_qf8up.css';
import '../../css/u/uickdp42r.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="rvnqahb0g"><path class="ys28wsbhb"/><path class="eqr_qf8up"/><path class="uickdp42r"/></g>`,
		"fallback": "streamline-plump:desktop-lock",
	});
}

export default Component;
