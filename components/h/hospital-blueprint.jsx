import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/y/ykzi9w-5s.css';
import '../../css/k/kespawbvd.css';
import '../../css/o/o7-ag87sb.css';
import '../../css/b/b134ehppy.css';
import '../../css/d/d5ox4i4-t.css';
import '../../css/q/qwulfyb5m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="wm-deco ykzi9w-5s"/><path class="kespawbvd wm-deco"/><path class="o7-ag87sb wm-deco"/><path class="b134ehppy wm-k"/><path class="d5ox4i4-t wm-a"/><path class="qwulfyb5m wm-k"/></g>`,
		"fallback": "withicons:hospital-blueprint",
	});
}

export default Component;
