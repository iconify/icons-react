import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/z04lvc3hj.css';
import '../../css/i/i3qi_3dsj.css';
import '../../css/a/ap3vazb_m.css';
import '../../css/s/s2nc09x3l.css';
import '../../css/w/w82a6y4xb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="z04lvc3hj"/><path class="i3qi_3dsj"/><path class="ap3vazb_m"/><path class="s2nc09x3l"/><path class="w82a6y4xb"/></g>`,
		"fallback": "lucide-extended:git-compare-arrows-duotone",
	});
}

export default Component;
