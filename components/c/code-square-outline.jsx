import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/i/ip_hlzfry.css';
import '../../css/k/ky_c7b80d.css';
import '../../css/b/b_gmwtrte.css';
import '../../css/u/u5bqo67kp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="ip_hlzfry"/><path class="ky_c7b80d"/><path class="b_gmwtrte"/><path clip-rule="evenodd" class="u5bqo67kp"/></g>`,
		"fallback": "solar:code-square-outline",
	});
}

export default Component;
