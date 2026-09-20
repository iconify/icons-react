import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/lof1q6bsp.css';
import '../../css/x/x8gyjkn-s.css';
import '../../css/k/k9c86v2uu.css';
import '../../css/r/r2-y64b7n.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="lof1q6bsp"/><path class="x8gyjkn-s"/><path class="k9c86v2uu"/><path class="r2-y64b7n"/></g>`,
		"fallback": "streamline-flex-color:inbox-open",
	});
}

export default Component;
