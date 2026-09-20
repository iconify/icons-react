import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hwzxxondw.css';
import '../../css/o/o-krqzbpw.css';
import '../../css/k/kfrom7bwt.css';
import '../../css/x/xtbg4jhqc.css';
import '../../css/j/jn8qy4bru.css';
import '../../css/u/usozxnbrm.css';
import '../../css/m/m4_qs971a.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hwzxxondw"/><path class="o-krqzbpw"/><path class="kfrom7bwt"/><path class="xtbg4jhqc"/><g class="jn8qy4bru"><circle class="usozxnbrm"/><path class="m4_qs971a"/></g>`,
		"fallback": "openmoji:first-quarter-moon",
	});
}

export default Component;
