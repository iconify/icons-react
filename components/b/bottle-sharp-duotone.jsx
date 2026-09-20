import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/l/lipgz5qjn.css';
import '../../css/v/vulylmfzh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="lipgz5qjn"/><path clip-rule="evenodd" class="vulylmfzh"/></g>`,
		"fallback": "keyline-icons:bottle-sharp-duotone",
	});
}

export default Component;
