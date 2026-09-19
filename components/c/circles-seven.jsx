import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tk1fx-k4e.css';
import '../../css/m/m9n0hxb7p.css';
import '../../css/r/r-4avvaah.css';
import '../../css/q/q-l0-dbqm.css';
import '../../css/o/o7b7df1_a.css';
import '../../css/s/skam1w1mz.css';
import '../../css/i/i78xwfb3q.css';
import '../../css/b/bzx8x3bgr.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="tk1fx-k4e"><path class="m9n0hxb7p"/><path class="r-4avvaah"/><path class="q-l0-dbqm"/><path class="o7b7df1_a"/><path class="skam1w1mz"/><path class="i78xwfb3q"/><path class="bzx8x3bgr"/></g>`,
		"fallback": "icon-park:circles-seven",
	});
}

export default Component;
