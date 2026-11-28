import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/s/sg180ebue.css';
import '../../css/g/gd7lxlbjj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="secondary sg180ebue"/><path class="gd7lxlbjj primary"/></g>`,
		"fallback": "iconaut:faucet-duotone",
	});
}

export default Component;
