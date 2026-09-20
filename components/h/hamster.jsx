import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/ba7ijwhrd.css';
import '../../css/f/fp7_89bvk.css';
import '../../css/y/yh42lpb_e.css';
import '../../css/c/c-35egb-s.css';
import '../../css/m/mdrx8kbad.css';
import '../../css/w/wy6p5zb-w.css';
import '../../css/g/gsb4x2_dd.css';
import '../../css/z/z_q817ins.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ba7ijwhrd"/><path class="fp7_89bvk"/><path class="yh42lpb_e"/><circle class="c-35egb-s"/><circle class="mdrx8kbad"/><path class="wy6p5zb-w"/><path class="gsb4x2_dd"/><path class="z_q817ins"/>`,
		"fallback": "openmoji:hamster",
	});
}

export default Component;
