import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/s/swkfozb5i.css';
import '../../css/n/nw0megbtg.css';
import '../../css/q/q_0syhbzq.css';
import '../../css/e/ec9rt7msp.css';
import '../../css/e/eu949r0vc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="swkfozb5i wm-deco"/><path class="nw0megbtg wm-k"/><path class="q_0syhbzq wm-a"/><path class="ec9rt7msp wm-k"/><path class="eu949r0vc wm-a"/></g>`,
		"fallback": "withicons:arrow-up-left-blueprint",
	});
}

export default Component;
