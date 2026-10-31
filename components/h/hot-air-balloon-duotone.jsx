import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/c81mke7qu.css';
import '../../css/k/kh83tbifg.css';
import '../../css/o/o72zglf1i.css';
import '../../css/f/flfequx_f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="c81mke7qu"/><path class="kh83tbifg"/><path class="o72zglf1i"/><path class="flfequx_f"/></g>`,
		"fallback": "lucide-extended:hot-air-balloon-duotone",
	});
}

export default Component;
