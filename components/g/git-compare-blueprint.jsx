import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/r/r9949qb8j.css';
import '../../css/i/iyvdx2l5t.css';
import '../../css/v/vze4wuf6n.css';
import '../../css/m/ms2t-0byp.css';
import '../../css/p/pzceqtw2u.css';
import '../../css/v/vo89sobde.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="r9949qb8j wm-deco"/><path class="iyvdx2l5t wm-deco"/><path class="vze4wuf6n wm-deco"/><path class="ms2t-0byp wm-k"/><path class="pzceqtw2u wm-a"/><path class="vo89sobde wm-a"/></g>`,
		"fallback": "withicons:git-compare-blueprint",
	});
}

export default Component;
