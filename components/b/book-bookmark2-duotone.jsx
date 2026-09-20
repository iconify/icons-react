import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/e/ekoeeh7wk.css';
import '../../css/m/mkedh2h8p.css';
import '../../css/i/idp4fcl_v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="ekoeeh7wk"/><path class="mkedh2h8p"/><path class="idp4fcl_v"/></g>`,
		"fallback": "reicon:book-bookmark2-duotone",
	});
}

export default Component;
