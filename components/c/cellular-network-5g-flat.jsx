import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/n/n86dzd-gr.css';
import '../../css/h/h_rva6brc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="n86dzd-gr"/><path class="h_rva6brc"/></g>`,
		"fallback": "streamline-sharp-color:cellular-network-5g-flat",
	});
}

export default Component;
