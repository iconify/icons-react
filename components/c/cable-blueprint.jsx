import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/m/m_5_1y9wc.css';
import '../../css/q/q_twvabdb.css';
import '../../css/c/cf3uzcrzx.css';
import '../../css/s/spdwecb9f.css';
import '../../css/p/p-al8lwyr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="m_5_1y9wc wm-deco"/><path class="q_twvabdb wm-deco"/><path class="cf3uzcrzx wm-deco"/><path class="spdwecb9f wm-k"/><path class="p-al8lwyr wm-a"/></g>`,
		"fallback": "withicons:cable-blueprint",
	});
}

export default Component;
