import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h01tyzbfu.css';
import '../../css/q/qgud6ebjl.css';
import '../../css/c/c5s6s5bvl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="h01tyzbfu"><path class="qgud6ebjl"/><path class="c5s6s5bvl"/></g>`,
		"fallback": "bitcoin-icons:confirmations-3-outline",
	});
}

export default Component;
