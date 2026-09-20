import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/f/faqw8z_pv.css';
import '../../css/b/bwwt_bc5h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="faqw8z_pv"/><path class="bwwt_bc5h"/></g>`,
		"fallback": "streamline-sharp-color:align-left-1-flat",
	});
}

export default Component;
