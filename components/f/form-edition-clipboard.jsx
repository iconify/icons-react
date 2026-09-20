import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/s/sczk89p9c.css';
import '../../css/h/hu7lz1x8l.css';
import '../../css/w/w493op95g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="sczk89p9c"/><path class="hu7lz1x8l"/><path class="w493op95g"/></g>`,
		"fallback": "streamline-freehand-color:form-edition-clipboard",
	});
}

export default Component;
