import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/e/eg_gxebcq.css';
import '../../css/m/mzc11wbed.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="eg_gxebcq"/><path class="mzc11wbed"/></g>`,
		"fallback": "streamline-sharp-color:fork-plate-flat",
	});
}

export default Component;
