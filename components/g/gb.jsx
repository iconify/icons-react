import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/l_gbeobcs.css';
import '../../css/x/x69uugbge.css';
import '../../css/n/nxikn_8ia.css';
import '../../css/b/b3b861ivx.css';

const viewBox = {"width":301,"height":151};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="l_gbeobcs"/><path class="x69uugbge"/><path class="nxikn_8ia"/><path class="b3b861ivx"/></g>`,
		"fallback": "cif:gb",
	});
}

export default Component;
