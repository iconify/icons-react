import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/v/v9-6caihp.css';
import '../../css/x/xw3a0e-uw.css';
import '../../css/o/o7-ag87sb.css';
import '../../css/r/roj28n45a.css';
import '../../css/l/lpje7cckh.css';
import '../../css/q/qwulfyb5m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="v9-6caihp wm-deco"/><path class="wm-deco xw3a0e-uw"/><path class="o7-ag87sb wm-deco"/><path class="roj28n45a wm-k"/><path class="lpje7cckh wm-a"/><path class="qwulfyb5m wm-k"/></g>`,
		"fallback": "withicons:align-bottom-blueprint",
	});
}

export default Component;
