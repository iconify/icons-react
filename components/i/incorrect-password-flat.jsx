import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/r/rmgg29b7c.css';
import '../../css/g/gf1qzozoj.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="rmgg29b7c"/><path class="gf1qzozoj"/></g>`,
		"fallback": "streamline-flex-color:incorrect-password-flat",
	});
}

export default Component;
