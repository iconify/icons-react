import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rggfaqb6e.css';
import '../../css/j/j363e_b5h.css';
import '../../css/o/o78lvf3sy.css';
import '../../css/c/c2np2czpa.css';
import '../../css/y/yl9o17bbe.css';
import '../../css/e/ebjugvbnp.css';
import '../../css/y/ym3ss2b4t.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="rggfaqb6e"><path class="j363e_b5h"/><path class="o78lvf3sy"/><path class="c2np2czpa"/><path class="yl9o17bbe"/><path class="ebjugvbnp"/><path class="ym3ss2b4t"/></g>`,
		"fallback": "icon-park:double-bed",
	});
}

export default Component;
