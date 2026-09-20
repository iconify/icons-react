import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/r/r_l4jyzdi.css';
import '../../css/m/ml556acti.css';
import '../../css/s/s9m_gjbne.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="r_l4jyzdi"/><path clip-rule="evenodd" class="ml556acti"/><path class="s9m_gjbne"/></g>`,
		"fallback": "pepicons-pencil:bell-off",
	});
}

export default Component;
