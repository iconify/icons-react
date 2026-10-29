import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/n/n6e9vybhg.css';
import '../../css/l/ltn3h1bpl.css';
import '../../css/u/ulwbvki_f.css';
import '../../css/y/ypgbrz-om.css';
import '../../css/z/ztoi_7bzr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="n6e9vybhg wm-deco"/><path class="ltn3h1bpl wm-deco"/><path class="ulwbvki_f wm-k"/><path class="wm-a ypgbrz-om"/><path class="wm-k ztoi_7bzr"/></g>`,
		"fallback": "withicons:arrow-left-right-blueprint",
	});
}

export default Component;
