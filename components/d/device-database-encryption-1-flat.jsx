import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/g/gs6decb3p.css';
import '../../css/h/h73po8qfn.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="gs6decb3p"/><path class="h73po8qfn"/></g>`,
		"fallback": "streamline-color:device-database-encryption-1-flat",
	});
}

export default Component;
