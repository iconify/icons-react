import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/e/ehmz38bwk.css';
import '../../css/o/o7-ag87sb.css';
import '../../css/t/t653i5bar.css';
import '../../css/p/puu63pmkx.css';
import '../../css/f/fp5s2ybam.css';
import '../../css/p/p8dc35b7q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="ehmz38bwk wm-deco"/><path class="o7-ag87sb wm-deco"/><path class="t653i5bar wm-k"/><path class="puu63pmkx wm-a"/><path class="fp5s2ybam wm-k"/><path class="p8dc35b7q wm-a"/></g>`,
		"fallback": "withicons:circle-check-big-blueprint",
	});
}

export default Component;
