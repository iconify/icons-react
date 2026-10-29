import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/t/tquwqibvl.css';
import '../../css/r/rvq524b9r.css';
import '../../css/a/ayhs6pbko.css';
import '../../css/m/m23y36bkg.css';
import '../../css/p/pnpvrvbmf.css';
import '../../css/s/ssuh6xb4n.css';
import '../../css/c/cdkyxjhyw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="tquwqibvl wm-deco"/><path class="rvq524b9r wm-deco"/><path class="ayhs6pbko wm-deco"/><path class="m23y36bkg wm-k"/><path class="pnpvrvbmf wm-a"/><path class="ssuh6xb4n wm-k"/><path class="cdkyxjhyw wm-a"/></g>`,
		"fallback": "withicons:apple-blueprint",
	});
}

export default Component;
