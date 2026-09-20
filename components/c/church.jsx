import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/diis5mrks.css';
import '../../css/n/n7k9r3b0e.css';
import '../../css/h/hvn2vyrei.css';
import '../../css/p/pe3x5lbzk.css';
import '../../css/n/n_zx2vuzo.css';
import '../../css/o/o5gu3rp9y.css';
import '../../css/j/j27hwlbdn.css';
import '../../css/h/hng_nubwz.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="diis5mrks"/><path class="n7k9r3b0e"/><path class="hvn2vyrei"/><circle class="pe3x5lbzk"/><path class="n_zx2vuzo"/><path class="o5gu3rp9y"/><path class="j27hwlbdn"/><circle class="hng_nubwz"/>`,
		"fallback": "openmoji:church",
	});
}

export default Component;
