import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g4f8vkb9x.css';
import '../../css/e/ejb_j_w_o.css';
import '../../css/t/tzgjcxbbf.css';
import '../../css/c/cvvwee2xa.css';
import '../../css/f/fg675xbjg.css';
import '../../css/x/xk761l73s.css';
import '../../css/q/q3wgo_bwi.css';
import '../../css/z/z7t7racog.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g4f8vkb9x"/><path class="ejb_j_w_o"/><path class="tzgjcxbbf"/><path class="cvvwee2xa"/><circle class="fg675xbjg"/><circle class="xk761l73s"/><path class="q3wgo_bwi"/><path class="z7t7racog"/>`,
		"fallback": "openmoji:hatching-chick",
	});
}

export default Component;
