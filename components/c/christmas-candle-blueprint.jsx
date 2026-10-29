import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/x/x6a4321nx.css';
import '../../css/j/jxp3unj0v.css';
import '../../css/y/yonu32bng.css';
import '../../css/x/xp-vb_b5f.css';
import '../../css/n/nco5jnbdk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="wm-deco x6a4321nx"/><path class="jxp3unj0v wm-deco"/><path class="wm-deco yonu32bng"/><path class="xp-vb_b5f"/><path class="nco5jnbdk"/></g>`,
		"fallback": "withicons:christmas-candle-blueprint",
	});
}

export default Component;
