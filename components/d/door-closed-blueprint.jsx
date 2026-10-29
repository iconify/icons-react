import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/r/rbfqm4b8t.css';
import '../../css/z/znerp6b0c.css';
import '../../css/o/o7-ag87sb.css';
import '../../css/r/rxmacrzpv.css';
import '../../css/s/smls78shz.css';
import '../../css/q/qwulfyb5m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="rbfqm4b8t wm-deco"/><path class="wm-deco znerp6b0c"/><path class="o7-ag87sb wm-deco"/><path class="rxmacrzpv wm-k"/><path class="smls78shz wm-a"/><path class="qwulfyb5m wm-k"/></g>`,
		"fallback": "withicons:door-closed-blueprint",
	});
}

export default Component;
