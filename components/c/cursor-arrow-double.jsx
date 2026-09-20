import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/n-9njukan.css';
import '../../css/z/zrg8eqs-k.css';
import '../../css/t/t673_szhp.css';
import '../../css/b/bly4s_ote.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="n-9njukan"/><path class="zrg8eqs-k"/><path class="t673_szhp"/><path class="bly4s_ote"/></g>`,
		"fallback": "streamline-cyber-color:cursor-arrow-double",
	});
}

export default Component;
