import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/a/a5jpz2bqs.css';
import '../../css/h/h4-tcib6f.css';
import '../../css/k/k-cnudbay.css';
import '../../css/f/f0h52dh1e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="a5jpz2bqs"/><path class="h4-tcib6f"/><path class="k-cnudbay"/><path class="f0h52dh1e"/></g>`,
		"fallback": "solar:clipboard-clock-outline",
	});
}

export default Component;
