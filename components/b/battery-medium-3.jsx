import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k2u665ban.css';
import '../../css/k/kg2ciqbpk.css';
import '../../css/k/k517x8b0k.css';
import '../../css/s/skrehrb6b.css';
import '../../css/e/e5_8lc4-l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="k2u665ban"><path class="kg2ciqbpk"/><path class="k517x8b0k"/><path class="skrehrb6b"/><path class="e5_8lc4-l"/></g>`,
		"fallback": "streamline-sharp-color:battery-medium-3",
	});
}

export default Component;
