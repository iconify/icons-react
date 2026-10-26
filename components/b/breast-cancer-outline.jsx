import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/u/u_b-4qdzj.css';
import '../../css/q/qn_f8924d.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="u_b-4qdzj"/><path class="qn_f8924d"/></g>`,
		"fallback": "healthicons:breast-cancer-outline",
	});
}

export default Component;
