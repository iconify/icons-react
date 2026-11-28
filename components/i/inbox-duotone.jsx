import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/u/u_kuf95aw.css';
import '../../css/t/t33upqbzj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="secondary u_kuf95aw"/><path class="primary t33upqbzj"/></g>`,
		"fallback": "iconaut:inbox-duotone",
	});
}

export default Component;
