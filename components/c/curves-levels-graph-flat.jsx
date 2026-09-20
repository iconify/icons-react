import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/f/fic1g_bih.css';
import '../../css/k/kajhfebfn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="fic1g_bih"/><path class="kajhfebfn"/></g>`,
		"fallback": "streamline-sharp-color:curves-levels-graph-flat",
	});
}

export default Component;
