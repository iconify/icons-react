import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/r/rb-ki7sjk.css';
import '../../css/h/h-oc6j79l.css';
import '../../css/e/enkc8mbld.css';
import '../../css/s/s-717su3i.css';
import '../../css/l/lhm2uccse.css';
import '../../css/d/ddurq_bhk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="rb-ki7sjk wm-deco"/><path class="h-oc6j79l wm-deco"/><path class="enkc8mbld wm-deco"/><path class="s-717su3i wm-k"/><path class="lhm2uccse wm-a"/><path class="ddurq_bhk wm-k"/></g>`,
		"fallback": "withicons:cube-blueprint",
	});
}

export default Component;
