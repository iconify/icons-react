import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/m/mdporxbhj.css';
import '../../css/e/eiqmxfbed.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="mdporxbhj"/><path clip-rule="evenodd" class="eiqmxfbed"/></g>`,
		"fallback": "reicon:bold-circle-duotone",
	});
}

export default Component;
