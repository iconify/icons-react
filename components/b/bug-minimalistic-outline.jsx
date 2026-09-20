import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/c/c6yq9sr9t.css';
import '../../css/o/orn1n2npw.css';
import '../../css/v/v88mkbbxx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="c6yq9sr9t"/><path class="orn1n2npw"/><path clip-rule="evenodd" class="v88mkbbxx"/></g>`,
		"fallback": "solar:bug-minimalistic-outline",
	});
}

export default Component;
