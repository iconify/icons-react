import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/t/txdfipboj.css';
import '../../css/n/nbj7ro57z.css';
import '../../css/k/kjq20lbyg.css';
import '../../css/t/tzrw3nvzq.css';
import '../../css/x/xdwdw1wlj.css';
import '../../css/n/nou_57b4u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="txdfipboj wm-deco"/><path class="nbj7ro57z wm-deco"/><path class="kjq20lbyg wm-k"/><path class="tzrw3nvzq wm-a"/><path class="wm-k xdwdw1wlj"/><path class="nou_57b4u wm-a"/></g>`,
		"fallback": "withicons:arrow-up-from-line-blueprint",
	});
}

export default Component;
