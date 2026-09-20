import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/ba2dst9zp.css';
import '../../css/t/tx93gdcfo.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ba2dst9zp"/><path class="tx93gdcfo"/></g>`,
		"fallback": "streamline-color:dashboard-circle",
	});
}

export default Component;
