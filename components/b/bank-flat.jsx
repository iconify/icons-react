import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/h/hxktpew3o.css';
import '../../css/d/dica5j1vs.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="hxktpew3o"/><path class="dica5j1vs"/></g>`,
		"fallback": "streamline-color:bank-flat",
	});
}

export default Component;
