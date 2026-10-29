import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/v/v0q8bnnhd.css';
import '../../css/v/vze4wuf6n.css';
import '../../css/e/egk8xcczi.css';
import '../../css/t/t0vujibsu.css';
import '../../css/y/yjl2qn3qm.css';
import '../../css/n/naemrts2p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="v0q8bnnhd wm-deco"/><path class="vze4wuf6n wm-deco"/><path class="egk8xcczi wm-k"/><path class="t0vujibsu wm-a"/><path class="wm-k yjl2qn3qm"/><path class="naemrts2p wm-a"/></g>`,
		"fallback": "withicons:airplay-blueprint",
	});
}

export default Component;
