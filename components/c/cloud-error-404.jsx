import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/q/qc7fmybpa.css';
import '../../css/d/dygsr9ltr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="qc7fmybpa"/><path class="dygsr9ltr"/></g>`,
		"fallback": "streamline-freehand-color:cloud-error-404",
	});
}

export default Component;
