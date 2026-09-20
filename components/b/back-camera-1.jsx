import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/nfpcuxbzs.css';
import '../../css/p/ptjq64yls.css';
import '../../css/t/t1ev48ysl.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="nfpcuxbzs"/><path class="ptjq64yls"/><path class="t1ev48ysl"/></g>`,
		"fallback": "streamline-color:back-camera-1",
	});
}

export default Component;
