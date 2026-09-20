import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/l/l_spyr_nx.css';
import '../../css/o/obxwblbgw.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="l_spyr_nx"/><path class="obxwblbgw"/></g>`,
		"fallback": "streamline-color:affordable-and-clean-energy-flat",
	});
}

export default Component;
