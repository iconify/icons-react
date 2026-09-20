import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s6iikjgcv.css';
import '../../css/r/rbuqiy84n.css';
import '../../css/m/mdgf13dlb.css';
import '../../css/z/z8ph1qbvh.css';
import '../../css/w/wfr_ekwpw.css';
import '../../css/f/f7sao0bjn.css';
import '../../css/m/mhpgb2bvn.css';
import '../../css/i/iun64ccvk.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="s6iikjgcv"/><path class="rbuqiy84n"/><path class="mdgf13dlb"/><path class="z8ph1qbvh"/><path class="wfr_ekwpw"/><path class="f7sao0bjn"/><path class="mhpgb2bvn"/><path class="iun64ccvk"/>`,
		"fallback": "openmoji:face-with-head-bandage",
	});
}

export default Component;
