import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/i/i4xtvfb6s.css';
import '../../css/d/dn-fkoz4z.css';
import '../../css/j/jz3sd-cwn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="i4xtvfb6s"/><path class="dn-fkoz4z"/><path class="jz3sd-cwn"/></g>`,
		"fallback": "streamline-sharp-color:camera-flip-1-flat",
	});
}

export default Component;
