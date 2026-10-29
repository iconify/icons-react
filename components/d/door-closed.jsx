import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gj4n3dbie.css';
import '../../css/f/fvsx_0bjj.css';
import '../../css/k/kr5g23bjh.css';
import '../../css/l/lycwtjeca.css';
import '../../css/d/dnp0bgwhz.css';
import '../../css/l/lt0hjtbcf.css';
import '../../css/u/u40soubkt.css';
import '../../css/j/jjt_jtimh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gj4n3dbie wm-shadow"/><path class="fvsx_0bjj wm-k"/><path class="kr5g23bjh wm-k"/><path class="lycwtjeca wm-k"/><path class="dnp0bgwhz wm-k"/><path class="lt0hjtbcf wm-shine"/><path class="u40soubkt wm-k"/><path class="jjt_jtimh wm-a"/>`,
		"fallback": "withicons-plush:door-closed",
	});
}

export default Component;
