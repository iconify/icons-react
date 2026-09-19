import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ufeehvblu.css';
import '../../css/r/rvg52ipun.css';
import '../../css/u/uhrp6ebbg.css';
import '../../css/l/lv4k99bmg.css';
import '../../css/q/qtfn6f5-x.css';
import '../../css/r/r4d67lbcz.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ufeehvblu"><path class="rvg52ipun"/><path class="uhrp6ebbg"/><path class="lv4k99bmg"/><path class="qtfn6f5-x"/><path class="r4d67lbcz"/></g>`,
		"fallback": "icon-park:enter-the-keyboard",
	});
}

export default Component;
