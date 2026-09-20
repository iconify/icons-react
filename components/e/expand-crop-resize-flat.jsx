import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/q/q784eeica.css';
import '../../css/r/r4ur_dbcg.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="q784eeica"/><path class="r4ur_dbcg"/></g>`,
		"fallback": "streamline-flex-color:expand-crop-resize-flat",
	});
}

export default Component;
