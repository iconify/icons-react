import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k_w2r4b0a.css';
import '../../css/b/bxo_i4aax.css';
import '../../css/x/x5el3e2in.css';
import '../../css/z/zax2x4bad.css';
import '../../css/v/v69tqwb2t.css';
import '../../css/b/btjlh4opu.css';
import '../../css/b/bag52vb4o.css';
import '../../css/f/f734v_b5v.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k_w2r4b0a"/><path class="bxo_i4aax"/><path class="x5el3e2in"/><path class="zax2x4bad"/><path class="v69tqwb2t"/><path class="btjlh4opu"/><path class="bag52vb4o"/><path class="f734v_b5v"/>`,
		"fallback": "fxemoji:articulatedlorry",
	});
}

export default Component;
