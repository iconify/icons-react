import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/owc0s9bcw.css';
import '../../css/h/huq216bxk.css';
import '../../css/r/rsyc0tngb.css';
import '../../css/h/h-fp87dsz.css';
import '../../css/e/e5e17vnfd.css';
import '../../css/j/j62o_xbze.css';
import '../../css/w/w8u89uc8k.css';
import '../../css/g/gm5pjoe1j.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="owc0s9bcw"/><path class="huq216bxk"/><path class="rsyc0tngb"/><path class="h-fp87dsz"/><path class="e5e17vnfd"/><path class="j62o_xbze"/><path class="w8u89uc8k"/><path class="gm5pjoe1j"/>`,
		"fallback": "openmoji:darth-vader",
	});
}

export default Component;
