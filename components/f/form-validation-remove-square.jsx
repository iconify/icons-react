import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/u/uk-0a0b3x.css';
import '../../css/m/mmzx-mamc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="uk-0a0b3x"/><path class="mmzx-mamc"/></g>`,
		"fallback": "streamline-freehand-color:form-validation-remove-square",
	});
}

export default Component;
