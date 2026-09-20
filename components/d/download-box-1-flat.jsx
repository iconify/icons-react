import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/z/zoxgrfblx.css';
import '../../css/a/auk14dbdr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="zoxgrfblx"/><path class="auk14dbdr"/></g>`,
		"fallback": "streamline-sharp-color:download-box-1-flat",
	});
}

export default Component;
