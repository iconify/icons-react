import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/p/pgu8b54pz.css';
import '../../css/f/frhw90b-y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="pgu8b54pz"/><path class="frhw90b-y"/></g>`,
		"fallback": "streamline-sharp-color:3d-rotate-y-axis-flat",
	});
}

export default Component;
