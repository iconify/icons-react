import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/l/l46d08s2h.css';
import '../../css/v/v_g7r_1us.css';
import '../../css/v/vlroo4bwv.css';
import '../../css/a/av9pjzb8r.css';
import '../../css/e/eyzg--bti.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="l46d08s2h wm-deco"/><path class="v_g7r_1us wm-deco"/><path class="vlroo4bwv wm-k"/><path class="av9pjzb8r wm-a"/><path class="eyzg--bti wm-a"/></g>`,
		"fallback": "withicons:fuel-blueprint",
	});
}

export default Component;
