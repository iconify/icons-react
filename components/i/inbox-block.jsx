import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/lrn33y8hk.css';
import '../../css/r/r28imlblv.css';
import '../../css/u/uq2pkhb-g.css';
import '../../css/n/nmg90_b5o.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="lrn33y8hk"/><path class="r28imlblv"/><path class="uq2pkhb-g"/><path class="nmg90_b5o"/></g>`,
		"fallback": "streamline-color:inbox-block",
	});
}

export default Component;
