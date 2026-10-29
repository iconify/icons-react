import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/k/kmjv3yb0y.css';
import '../../css/u/u7ifs670z.css';
import '../../css/m/ma0y71btq.css';
import '../../css/u/us9qbxizz.css';
import '../../css/e/ewc-7sork.css';
import '../../css/e/e5h10r5es.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="kmjv3yb0y wm-deco"/><path class="u7ifs670z wm-deco"/><path class="ma0y71btq wm-deco"/><path class="us9qbxizz wm-k"/><path class="ewc-7sork wm-a"/><path class="e5h10r5es wm-k"/></g>`,
		"fallback": "withicons:cloud-hail-blueprint",
	});
}

export default Component;
