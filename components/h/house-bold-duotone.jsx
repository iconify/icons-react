import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z-ste9rjs.css';
import '../../css/x/xtpeb-edw.css';
import '../../css/b/bp5vlbc9d.css';
import '../../css/g/gam1sgbnn.css';
import '../../css/x/x047q_bxu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="z-ste9rjs"/><g class="xtpeb-edw"><path class="bp5vlbc9d"/><path class="gam1sgbnn"/><path class="x047q_bxu"/></g>`,
		"fallback": "solar:house-bold-duotone",
	});
}

export default Component;
