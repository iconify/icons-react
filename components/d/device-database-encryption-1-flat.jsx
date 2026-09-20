import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/i/i3nq2pbzs.css';
import '../../css/e/eoe8dt2po.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="i3nq2pbzs"/><path class="eoe8dt2po"/></g>`,
		"fallback": "streamline-sharp-color:device-database-encryption-1-flat",
	});
}

export default Component;
