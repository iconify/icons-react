import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/n/nri-78lca.css';
import '../../css/r/r3e_eni1w.css';
import '../../css/v/vze4wuf6n.css';
import '../../css/b/bt4eanb_m.css';
import '../../css/e/ee72xe_hx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="nri-78lca wm-deco"/><path class="r3e_eni1w wm-deco"/><path class="vze4wuf6n wm-deco"/><path class="bt4eanb_m wm-k"/><path class="ee72xe_hx wm-a"/></g>`,
		"fallback": "withicons:building-2-blueprint",
	});
}

export default Component;
