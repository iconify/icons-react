import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pjyby6o7j.css';
import '../../css/p/p3poopb-f.css';
import '../../css/d/d_8ct9emv.css';
import '../../css/v/vv4r3nbqi.css';
import '../../css/u/u72utlerl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="pjyby6o7j"/><path class="p3poopb-f"/><path class="d_8ct9emv"/><path class="vv4r3nbqi"/><path class="u72utlerl"/></g>`,
		"fallback": "lucide-extended:calendar-heart-duotone",
	});
}

export default Component;
