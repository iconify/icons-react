import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/r/rey5mcbva.css';
import '../../css/z/ztdqi0bxo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="rey5mcbva"/><path class="ztdqi0bxo"/></g>`,
		"fallback": "reicon:align-v-spacing-duotone",
	});
}

export default Component;
