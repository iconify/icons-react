import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/cgo1yfk4r.css';
import '../../css/k/kmczsebcu.css';
import '../../css/j/j-dq22bkl.css';
import '../../css/w/w4fvxw7zn.css';
import '../../css/x/xfql-4c0p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="cgo1yfk4r"/><path class="kmczsebcu"/><path class="j-dq22bkl"/><path class="w4fvxw7zn"/><path class="xfql-4c0p"/></g>`,
		"fallback": "lucide-extended:baggage-claim-duotone",
	});
}

export default Component;
