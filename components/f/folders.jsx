import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pvudj1bgl.css';
import '../../css/m/m_jlv9b6k.css';
import '../../css/e/eodb2eb7k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="pvudj1bgl"/><path class="m_jlv9b6k"/><path class="eodb2eb7k"/></g>`,
		"fallback": "andrsrxn:folders",
	});
}

export default Component;
