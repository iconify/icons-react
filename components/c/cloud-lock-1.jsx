import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/s/sf6efsbbk.css';
import '../../css/z/zw9-e-bph.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="sf6efsbbk"/><path class="zw9-e-bph"/></g>`,
		"fallback": "streamline-freehand-color:cloud-lock-1",
	});
}

export default Component;
