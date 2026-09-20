import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/z/zmte4xe3p.css';
import '../../css/b/bw0eq9bcl.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="zmte4xe3p"/><path class="bw0eq9bcl"/></g>`,
		"fallback": "streamline-flex-color:deepfake-technology-1-flat",
	});
}

export default Component;
