import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/l/lgab0wbtr.css';
import '../../css/h/hf4x25m7i.css';
import '../../css/g/gvl74m1sh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="lgab0wbtr"/><path clip-rule="evenodd" class="hf4x25m7i"/><path class="gvl74m1sh"/></g>`,
		"fallback": "reicon:cart2-duotone",
	});
}

export default Component;
