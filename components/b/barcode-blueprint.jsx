import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/x/x49uqwbjn.css';
import '../../css/b/brfohtb0o.css';
import '../../css/o/oun623fgc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="wm-deco x49uqwbjn"/><path class="brfohtb0o wm-deco"/><path class="oun623fgc wm-k"/></g>`,
		"fallback": "withicons:barcode-blueprint",
	});
}

export default Component;
