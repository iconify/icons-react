import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/h/hqkb3ftae.css';
import '../../css/z/zovl4tbup.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="hqkb3ftae secondary"/><path class="primary zovl4tbup"/></g>`,
		"fallback": "iconaut:expand-horizontal-duotone",
	});
}

export default Component;
