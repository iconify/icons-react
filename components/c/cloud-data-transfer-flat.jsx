import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/o/o6odcsbyd.css';
import '../../css/m/m7pyinb4h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="o6odcsbyd"/><path class="m7pyinb4h"/></g>`,
		"fallback": "streamline-sharp-color:cloud-data-transfer-flat",
	});
}

export default Component;
