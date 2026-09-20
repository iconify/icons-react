import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/f/f054vmoxe.css';
import '../../css/v/v6-szcb0s.css';
import '../../css/g/g00mf6bnj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="f054vmoxe"/><path class="v6-szcb0s"/><path clip-rule="evenodd" class="g00mf6bnj"/></g>`,
		"fallback": "reicon:clipboard-text-duotone",
	});
}

export default Component;
