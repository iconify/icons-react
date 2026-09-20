import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/j/jlbatjplj.css';
import '../../css/k/k1yubveso.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="jlbatjplj"/><path class="k1yubveso"/></g>`,
		"fallback": "streamline-freehand-color:form-validation-check-square-1",
	});
}

export default Component;
