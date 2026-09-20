import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/r/rj6-sg7sb.css';
import '../../css/a/asamhsb1h.css';
import '../../css/f/fk0hwpbxn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="rj6-sg7sb"/><path class="asamhsb1h"/><path class="fk0hwpbxn"/></g>`,
		"fallback": "streamline-freehand-color:connect-device-exchange",
	});
}

export default Component;
