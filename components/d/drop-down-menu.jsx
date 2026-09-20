import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k2u665ban.css';
import '../../css/m/m4ulaabnz.css';
import '../../css/q/qd4poz7eq.css';
import '../../css/z/zvxqg2b4f.css';
import '../../css/j/jmcdaq-am.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="k2u665ban"><path class="m4ulaabnz"/><path class="qd4poz7eq"/><path class="zvxqg2b4f"/><path class="jmcdaq-am"/></g>`,
		"fallback": "streamline-sharp-color:drop-down-menu",
	});
}

export default Component;
