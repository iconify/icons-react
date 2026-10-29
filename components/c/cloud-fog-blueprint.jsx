import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/p/p_f4t5bjv.css';
import '../../css/i/ia88ebc7y.css';
import '../../css/p/puh_7bb0r.css';
import '../../css/u/us9qbxizz.css';
import '../../css/m/mg8nybcxh.css';
import '../../css/e/e5h10r5es.css';
import '../../css/s/s37zb90fv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="p_f4t5bjv wm-deco"/><path class="ia88ebc7y wm-deco"/><path class="puh_7bb0r wm-deco"/><path class="us9qbxizz wm-k"/><path class="mg8nybcxh wm-a"/><path class="e5h10r5es wm-k"/><path class="s37zb90fv wm-a"/></g>`,
		"fallback": "withicons:cloud-fog-blueprint",
	});
}

export default Component;
