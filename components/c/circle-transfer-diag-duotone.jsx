import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/h/hxmiqibyk.css';
import '../../css/v/v8upppmar.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="hxmiqibyk"/><path class="v8upppmar"/></g>`,
		"fallback": "reicon:circle-transfer-diag-duotone",
	});
}

export default Component;
