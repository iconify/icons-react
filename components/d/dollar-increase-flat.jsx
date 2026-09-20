import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/n/nczockbdm.css';
import '../../css/t/tf0fn83la.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="nczockbdm"/><path class="tf0fn83la"/></g>`,
		"fallback": "streamline-sharp-color:dollar-increase-flat",
	});
}

export default Component;
