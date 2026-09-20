import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/r/rqfycqb6f.css';
import '../../css/e/etkfynd5s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="rqfycqb6f"/><path class="etkfynd5s"/></g>`,
		"fallback": "reicon:bandage-duotone",
	});
}

export default Component;
