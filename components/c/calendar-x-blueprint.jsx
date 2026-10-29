import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/f/fj43dsa4b.css';
import '../../css/c/cf3uzcrzx.css';
import '../../css/j/johjr7vlq.css';
import '../../css/h/hp_yrebrn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="fj43dsa4b wm-deco"/><path class="cf3uzcrzx wm-deco"/><path class="johjr7vlq wm-k"/><path class="hp_yrebrn wm-a"/></g>`,
		"fallback": "withicons:calendar-x-blueprint",
	});
}

export default Component;
