import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/y/y-_tb4_6e.css';
import '../../css/s/sxkh94-hc.css';
import '../../css/o/o7-ag87sb.css';
import '../../css/r/rceqk1bum.css';
import '../../css/d/ds9ofjbgb.css';
import '../../css/u/uolx8dbdk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="wm-deco y-_tb4_6e"/><path class="sxkh94-hc wm-deco"/><path class="o7-ag87sb wm-deco"/><path class="rceqk1bum wm-k"/><path class="ds9ofjbgb wm-a"/><path class="uolx8dbdk wm-k"/></g>`,
		"fallback": "withicons:certificate-blueprint",
	});
}

export default Component;
