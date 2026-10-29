import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/p/pvs0iqb8a.css';
import '../../css/j/j88sfgrhe.css';
import '../../css/e/e1h0nq76l.css';
import '../../css/j/jlp-ovbkm.css';
import '../../css/f/fdivfk9es.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="pvs0iqb8a wm-deco"/><path class="j88sfgrhe wm-deco"/><path class="e1h0nq76l wm-deco"/><path class="jlp-ovbkm wm-k"/><path class="fdivfk9es wm-a"/></g>`,
		"fallback": "withicons:brain-circuit-blueprint",
	});
}

export default Component;
