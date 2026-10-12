import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/lnq40vbzs.css';
import '../../css/g/gxlwordvq.css';
import '../../css/p/pihw0xj_y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="lnq40vbzs"/><path class="gxlwordvq"/><path class="pihw0xj_y"/></g>`,
		"fallback": "lucide-extended:hotel-duotone",
	});
}

export default Component;
