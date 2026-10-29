import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/v/v6lu6-pan.css';
import '../../css/k/k5raeubzg.css';
import '../../css/l/lfzj22qgn.css';
import '../../css/j/jy3c7oi9w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="v6lu6-pan wm-deco"/><path class="k5raeubzg wm-deco"/><path class="lfzj22qgn wm-k"/><path class="jy3c7oi9w wm-a"/></g>`,
		"fallback": "withicons:banknote-blueprint",
	});
}

export default Component;
