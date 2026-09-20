import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/h/hz78iv51y.css';
import '../../css/x/x2kte-byy.css';
import '../../css/q/qj43urbvu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="hz78iv51y"/><path class="x2kte-byy"/><path class="qj43urbvu"/></g>`,
		"fallback": "keyline-icons:cake-sharp-duotone",
	});
}

export default Component;
