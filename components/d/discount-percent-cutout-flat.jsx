import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/b/ba791c6pg.css';
import '../../css/z/z0nijkevg.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="ba791c6pg"/><path class="z0nijkevg"/></g>`,
		"fallback": "streamline-plump-color:discount-percent-cutout-flat",
	});
}

export default Component;
