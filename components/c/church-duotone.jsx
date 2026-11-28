import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/a/amvepcwbr.css';
import '../../css/l/l_lglzbws.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="amvepcwbr secondary"/><path class="l_lglzbws primary"/></g>`,
		"fallback": "iconaut:church-duotone",
	});
}

export default Component;
