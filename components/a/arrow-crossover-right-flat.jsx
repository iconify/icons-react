import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/k/kw_jwacah.css';
import '../../css/c/c7uxezb-s.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="kw_jwacah"/><path class="c7uxezb-s"/></g>`,
		"fallback": "streamline-color:arrow-crossover-right-flat",
	});
}

export default Component;
