import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/s/s_zb3ac6y.css';
import '../../css/o/ogt0f9szd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="s_zb3ac6y"/><path class="ogt0f9szd"/></g>`,
		"fallback": "streamline-freehand-color:currency-pound-bubble",
	});
}

export default Component;
