import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/mx7m2kb4i.css';
import '../../css/m/mtt6u2npc.css';
import '../../css/v/vt2jqcb8p.css';
import '../../css/b/bvgmm8b4h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="mx7m2kb4i"/><path class="mtt6u2npc"/><path class="vt2jqcb8p"/><path class="bvgmm8b4h"/></g>`,
		"fallback": "lucide-extended:biceps-flexed-duotone",
	});
}

export default Component;
