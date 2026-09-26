import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/y/ya_55rppu.css';
import '../../css/e/e9bv47pbe.css';
import '../../css/t/tzklcpb0u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="ya_55rppu"/><path class="e9bv47pbe"/><path class="tzklcpb0u"/></g>`,
		"fallback": "solar:file-type-bold-duotone",
	});
}

export default Component;
