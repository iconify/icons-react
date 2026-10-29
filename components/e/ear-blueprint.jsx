import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/d/d6itvcckt.css';
import '../../css/o/ol1v0dzsm.css';
import '../../css/t/tav677bsq.css';
import '../../css/j/jmaa7abnm.css';
import '../../css/t/tbbshccdj.css';
import '../../css/l/loh7sw3oh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="d6itvcckt wm-deco"/><path class="ol1v0dzsm wm-deco"/><path class="tav677bsq wm-deco"/><path class="jmaa7abnm wm-k"/><path class="tbbshccdj wm-a"/><path class="loh7sw3oh wm-k"/></g>`,
		"fallback": "withicons:ear-blueprint",
	});
}

export default Component;
