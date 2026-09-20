import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fdjb2jber.css';
import '../../css/q/qn_gx1bqs.css';
import '../../css/t/t7up8owgi.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="fdjb2jber"/><path clip-rule="evenodd" class="qn_gx1bqs"/><path class="t7up8owgi"/></g>`,
		"fallback": "streamline-plump-color:compress-pdf-flat",
	});
}

export default Component;
