import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/a/axm1x5_0j.css';
import '../../css/r/rz8dbzb9l.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="bi12bsetm"><circle class="axm1x5_0j"/><path class="rz8dbzb9l"/></g>`,
		"fallback": "cryptocurrency-color:dcr",
	});
}

export default Component;
