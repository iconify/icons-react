import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/b/brye_nbes.css';
import '../../css/c/cf3uzcrzx.css';
import '../../css/p/p10zt4bwe.css';
import '../../css/t/tzhb1vbig.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="brye_nbes wm-deco"/><path class="cf3uzcrzx wm-deco"/><path class="p10zt4bwe wm-k"/><path class="tzhb1vbig wm-a"/></g>`,
		"fallback": "withicons:chart-candlestick-blueprint",
	});
}

export default Component;
