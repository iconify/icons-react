import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/c17ntxbcz.css';
import '../../css/a/ai8knqb5k.css';
import '../../css/c/cc637x-tb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="c17ntxbcz"/><path class="ai8knqb5k"/><path class="cc637x-tb"/></g>`,
		"fallback": "lucide-extended:alarm-clock-check-duotone",
	});
}

export default Component;
