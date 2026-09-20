import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/i/i5fkrm2hr.css';
import '../../css/w/wno0yfbve.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="i5fkrm2hr"/><path class="wno0yfbve"/></g>`,
		"fallback": "streamline-sharp-color:folder-block-flat",
	});
}

export default Component;
