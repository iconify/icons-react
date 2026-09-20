import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/y/yhv5abczy.css';
import '../../css/r/rppt24xri.css';
import '../../css/d/dno4_nblm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="yhv5abczy"/><path class="rppt24xri"/><path class="dno4_nblm"/></g>`,
		"fallback": "keyline-icons:cast-sharp-two-tone",
	});
}

export default Component;
