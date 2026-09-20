import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/in9d5ac6n.css';
import '../../css/l/lyjbbcbnv.css';
import '../../css/b/bsqsc0x0b.css';
import '../../css/l/l30ybptyk.css';
import '../../css/m/meo43tb6e.css';
import '../../css/p/pj5i3mb8t.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="in9d5ac6n"><path class="lyjbbcbnv"/><path class="bsqsc0x0b"/><path class="l30ybptyk"/><path class="meo43tb6e"/><path class="pj5i3mb8t"/></g>`,
		"fallback": "streamline-plump-color:high-speed-train-side",
	});
}

export default Component;
