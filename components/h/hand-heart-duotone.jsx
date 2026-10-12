import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/zdxnsqbhy.css';
import '../../css/z/z2drqj_0h.css';
import '../../css/l/lcgu4nb3z.css';
import '../../css/f/f1rc7mc_w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="zdxnsqbhy"/><path class="z2drqj_0h"/><path class="lcgu4nb3z"/><path class="f1rc7mc_w"/></g>`,
		"fallback": "lucide-extended:hand-heart-duotone",
	});
}

export default Component;
