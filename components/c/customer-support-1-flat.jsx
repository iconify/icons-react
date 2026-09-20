import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/n/nlyg03boh.css';
import '../../css/d/dap8hrb5h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="nlyg03boh"/><path class="dap8hrb5h"/></g>`,
		"fallback": "streamline-sharp-color:customer-support-1-flat",
	});
}

export default Component;
