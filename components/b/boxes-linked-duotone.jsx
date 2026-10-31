import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/khqe9b5yy.css';
import '../../css/k/kg2s5d_hl.css';
import '../../css/t/tn5wpywmn.css';
import '../../css/z/zeojzabkt.css';
import '../../css/i/i9yr11jor.css';
import '../../css/a/apnogjb_m.css';
import '../../css/l/lcj0h9b8b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="khqe9b5yy"/><path class="kg2s5d_hl"/><path class="tn5wpywmn"/><path class="zeojzabkt"/><path class="i9yr11jor"/><path class="apnogjb_m"/><path class="lcj0h9b8b"/></g>`,
		"fallback": "lucide-extended:boxes-linked-duotone",
	});
}

export default Component;
