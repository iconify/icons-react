import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/k/kk6gizbva.css';
import '../../css/a/a_0nachha.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="kk6gizbva"/><path class="a_0nachha"/></g>`,
		"fallback": "streamline-sharp-color:bug-virus-browser-flat",
	});
}

export default Component;
