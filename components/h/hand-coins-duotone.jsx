import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/ve1apgbwp.css';
import '../../css/k/kskhodb0a.css';
import '../../css/x/x1mnnibkw.css';
import '../../css/z/zlkmtxb7x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ve1apgbwp"/><path class="kskhodb0a"/><path class="x1mnnibkw"/><path class="zlkmtxb7x"/></g>`,
		"fallback": "lucide-extended:hand-coins-duotone",
	});
}

export default Component;
