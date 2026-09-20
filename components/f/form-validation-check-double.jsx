import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/v/v3dlouu9y.css';
import '../../css/o/ovwlpab7c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="v3dlouu9y"/><path class="ovwlpab7c"/></g>`,
		"fallback": "streamline-freehand:form-validation-check-double",
	});
}

export default Component;
