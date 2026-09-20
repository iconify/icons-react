import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/d/dfxo87bem.css';
import '../../css/q/qw7_lacpd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="dfxo87bem"/><path class="qw7_lacpd"/></g>`,
		"fallback": "solar:diagram-up-bold-duotone",
	});
}

export default Component;
