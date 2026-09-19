import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/v90cyqb4w.css';
import '../../css/g/gt1ijwbrf.css';
import '../../css/q/qta-3s5fl.css';
import '../../css/c/cq8t6x90d.css';
import '../../css/t/tw9hhdcup.css';
import '../../css/y/ykuyu_vsm.css';
import '../../css/m/m1ua9xbil.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="v90cyqb4w"/><path clip-rule="evenodd" class="gt1ijwbrf"/><path class="qta-3s5fl"/><path class="cq8t6x90d"/><path clip-rule="evenodd" class="tw9hhdcup"/><path class="ykuyu_vsm"/><path class="m1ua9xbil"/></g>`,
		"fallback": "glyphs:ambulance-bold",
	});
}

export default Component;
