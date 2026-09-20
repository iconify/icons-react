import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/s/sl6jbgbvo.css';
import '../../css/d/d3c_rjrbn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="sl6jbgbvo"/><path class="d3c_rjrbn"/></g>`,
		"fallback": "streamline-sharp-color:download-stack-flat",
	});
}

export default Component;
