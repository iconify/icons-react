import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/tbg5w1btb.css';
import '../../css/r/rl1-e60-n.css';
import '../../css/h/hf4ex5bxl.css';
import '../../css/w/w2wzwzvth.css';
import '../../css/g/g1mvwrb7t.css';
import '../../css/e/eprrkjb9i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="tbg5w1btb wm-k"/><path class="rl1-e60-n wm-k"/><path class="hf4ex5bxl wm-k"/><path class="w2wzwzvth wm-shine"/><path class="g1mvwrb7t wm-k"/><path class="eprrkjb9i wm-k"/></g>`,
		"fallback": "withicons-anime:ban",
	});
}

export default Component;
