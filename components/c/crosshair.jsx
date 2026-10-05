import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xn5eo9bqs.css';
import '../../css/v/vqm0_dtme.css';
import '../../css/c/ciss-jbrv.css';
import '../../css/f/fe1ld0bgr.css';
import '../../css/f/fltmthbdi.css';
import '../../css/m/mnqpjmj2f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xn5eo9bqs"><path class="vqm0_dtme"/><path class="ciss-jbrv"/><path class="fe1ld0bgr"/><path class="fltmthbdi"/><path class="mnqpjmj2f"/></g>`,
		"fallback": "matita:crosshair",
	});
}

export default Component;
