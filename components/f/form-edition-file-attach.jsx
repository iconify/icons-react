import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/u/u2-x04b5l.css';
import '../../css/m/m0p926btc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="u2-x04b5l"/><path class="m0p926btc"/></g>`,
		"fallback": "streamline-freehand-color:form-edition-file-attach",
	});
}

export default Component;
