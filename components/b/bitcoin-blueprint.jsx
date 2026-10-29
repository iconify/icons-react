import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/e/epjrbcbmn.css';
import '../../css/g/g442iwe_t.css';
import '../../css/d/dfr8kabwp.css';
import '../../css/o/omdwggbcq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="epjrbcbmn wm-deco"/><path class="g442iwe_t wm-deco"/><path class="dfr8kabwp wm-k"/><path class="omdwggbcq wm-a"/></g>`,
		"fallback": "withicons:bitcoin-blueprint",
	});
}

export default Component;
