import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/sxm22-bpx.css';
import '../../css/u/umiyufmzm.css';
import '../../css/a/amle7cc9s.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="sxm22-bpx"/><path class="umiyufmzm"/><path class="amle7cc9s"/></g>`,
		"fallback": "streamline-color:browser-hash",
	});
}

export default Component;
