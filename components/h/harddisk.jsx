import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/ge_dsy-5a.css';
import '../../css/l/ljz6fshnu.css';
import '../../css/j/jekfsfzvx.css';
import '../../css/n/n7ac0xbcx.css';
import '../../css/s/skk33b_nv.css';
import '../../css/v/vf6e-d3my.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ge_dsy-5a"/><circle class="ljz6fshnu"/><path class="jekfsfzvx"/><path class="n7ac0xbcx"/><path class="skk33b_nv"/><path class="vf6e-d3my"/>`,
		"fallback": "fxemoji:harddisk",
	});
}

export default Component;
