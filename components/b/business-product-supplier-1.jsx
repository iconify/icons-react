import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/jfhy-ebhj.css';
import '../../css/o/oes_wsblp.css';
import '../../css/v/vea79f44b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="jfhy-ebhj"/><path class="oes_wsblp"/><path class="vea79f44b"/></g>`,
		"fallback": "streamline-freehand-color:business-product-supplier-1",
	});
}

export default Component;
