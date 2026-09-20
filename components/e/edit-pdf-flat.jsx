import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/j/jp-oszbhg.css';
import '../../css/u/ujiarsb-i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="jp-oszbhg"/><path class="ujiarsb-i"/></g>`,
		"fallback": "streamline-sharp-color:edit-pdf-flat",
	});
}

export default Component;
