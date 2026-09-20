import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/h/he78flbis.css';
import '../../css/m/m9mu3ciid.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="he78flbis"/><path class="m9mu3ciid"/></g>`,
		"fallback": "streamline-sharp-color:arrow-up-large-2-flat",
	});
}

export default Component;
