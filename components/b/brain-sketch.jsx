import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/x/xc-0o323g.css';
import '../../css/f/fy6bo93ja.css';
import '../../css/o/oxzt-_bip.css';
import '../../css/l/lzvj-hbzd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="xc-0o323g"/><path class="fy6bo93ja wm-a"/><path class="oxzt-_bip wm-k"/><path class="lzvj-hbzd wm-a"/></g>`,
		"fallback": "withicons:brain-sketch",
	});
}

export default Component;
