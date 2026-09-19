import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/c/c_pkmobha.css';
import '../../css/o/onkfr279v.css';
import '../../css/k/ksf38acky.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="c_pkmobha"/><path clip-rule="evenodd" class="onkfr279v"/><path class="ksf38acky"/></g>`,
		"fallback": "healthicons:chills-outline-24px",
	});
}

export default Component;
