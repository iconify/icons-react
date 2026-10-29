import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/z/za8kaacpl.css';
import '../../css/i/i-70ghq2x.css';
import '../../css/w/w6jtn_m4n.css';
import '../../css/f/fhed5wbpi.css';
import '../../css/p/p1zhbt9fv.css';
import '../../css/s/ssahdd8ee.css';
import '../../css/v/v4090gjwj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="wm-deco za8kaacpl"/><path class="i-70ghq2x wm-deco"/><path class="w6jtn_m4n wm-deco"/><path class="fhed5wbpi wm-k"/><path class="p1zhbt9fv wm-a"/><path class="ssahdd8ee wm-k"/><path class="v4090gjwj wm-a"/></g>`,
		"fallback": "withicons:highlighter-blueprint",
	});
}

export default Component;
