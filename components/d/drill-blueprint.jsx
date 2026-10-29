import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/h/h1jl_pbfc.css';
import '../../css/g/giah0rbxy.css';
import '../../css/x/xupe0ib4r.css';
import '../../css/n/n0to2bcrt.css';
import '../../css/m/m5u5l5b7g.css';
import '../../css/d/dflbmjbgp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="h1jl_pbfc wm-deco"/><path class="giah0rbxy wm-deco"/><path class="wm-deco xupe0ib4r"/><path class="n0to2bcrt wm-k"/><path class="m5u5l5b7g wm-a"/><path class="dflbmjbgp wm-k"/></g>`,
		"fallback": "withicons:drill-blueprint",
	});
}

export default Component;
