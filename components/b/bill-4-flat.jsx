import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/ei4o_1bjg.css';
import '../../css/c/chk68rb-p.css';
import '../../css/k/kr57occ3n.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ei4o_1bjg"/><path class="chk68rb-p"/><path clip-rule="evenodd" class="kr57occ3n"/></g>`,
		"fallback": "streamline-color:bill-4-flat",
	});
}

export default Component;
