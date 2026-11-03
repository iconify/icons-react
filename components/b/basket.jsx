import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eztqw9biy.css';
import '../../css/c/czy5lsm-m.css';
import '../../css/u/uucqckbpy.css';
import '../../css/p/p2enzxkpu.css';
import '../../css/x/xmckbdvld.css';
import '../../css/l/l322s4hry.css';
import '../../css/x/x1md8wo2d.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="eztqw9biy"><path class="czy5lsm-m"/><path class="uucqckbpy"/><path class="p2enzxkpu"/></g><path class="xmckbdvld"/><circle class="l322s4hry"/><path class="x1md8wo2d"/>`,
		"fallback": "openmoji:basket",
	});
}

export default Component;
