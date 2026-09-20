import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/d/ddcs26bte.css';
import '../../css/k/k6kya6b4k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="ddcs26bte"/><path class="k6kya6b4k"/></g>`,
		"fallback": "streamline-freehand-color:form-validation-check-double",
	});
}

export default Component;
