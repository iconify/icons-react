import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/a/ar91wmnce.css';
import '../../css/b/bkqg3acdx.css';
import '../../css/o/o7-ag87sb.css';
import '../../css/o/okbypbc8s.css';
import '../../css/o/o7qgu6b1p.css';
import '../../css/k/kyiupabxi.css';
import '../../css/u/uzpya4bvj.css';
import '../../css/d/dca3gmbfm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="ar91wmnce wm-deco"/><path class="bkqg3acdx wm-deco"/><path class="o7-ag87sb wm-deco"/><path class="okbypbc8s wm-k"/><path class="o7qgu6b1p wm-a"/><path class="kyiupabxi wm-s"/><path class="uzpya4bvj wm-k"/><path class="dca3gmbfm wm-a"/></g>`,
		"fallback": "withicons:flip-horizontal-blueprint",
	});
}

export default Component;
