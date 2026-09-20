import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/e/e6-u_ttdn.css';
import '../../css/n/nkh9v5_ls.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="e6-u_ttdn"/><path class="nkh9v5_ls"/></g>`,
		"fallback": "streamline-sharp-color:hearing-deaf-1-flat",
	});
}

export default Component;
