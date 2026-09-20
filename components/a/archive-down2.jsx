import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/e/eq5vfccfc.css';
import '../../css/u/um45d4bhm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="eq5vfccfc"/><path clip-rule="evenodd" class="um45d4bhm"/></g>`,
		"fallback": "reicon:archive-down2",
	});
}

export default Component;
