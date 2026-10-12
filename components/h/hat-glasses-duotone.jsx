import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/kt_p1jb9m.css';
import '../../css/m/mtly36fij.css';
import '../../css/t/tax-v4byb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="kt_p1jb9m"/><path class="mtly36fij"/><path class="tax-v4byb"/></g>`,
		"fallback": "lucide-extended:hat-glasses-duotone",
	});
}

export default Component;
