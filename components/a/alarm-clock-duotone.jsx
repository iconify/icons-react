import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/c17ntxbcz.css';
import '../../css/k/ks_4zbsjr.css';
import '../../css/w/w5cigfn4d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="c17ntxbcz"/><path class="ks_4zbsjr"/><path class="w5cigfn4d"/></g>`,
		"fallback": "lucide-extended:alarm-clock-duotone",
	});
}

export default Component;
