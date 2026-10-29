import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/k/kh__uze6o.css';
import '../../css/v/vze4wuf6n.css';
import '../../css/u/ubc7dibpo.css';
import '../../css/h/h-vi4fbem.css';
import '../../css/e/e8xp_acfv.css';
import '../../css/a/aa389ak4h.css';
import '../../css/q/qe6ivpbpt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="kh__uze6o wm-deco"/><path class="vze4wuf6n wm-deco"/><path class="ubc7dibpo wm-k"/><path class="h-vi4fbem wm-a"/><path class="e8xp_acfv wm-s"/><path class="aa389ak4h wm-k"/><path class="qe6ivpbpt wm-a"/></g>`,
		"fallback": "withicons:image-plus-blueprint",
	});
}

export default Component;
