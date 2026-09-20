import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/q/q3-fskb6g.css';
import '../../css/g/gvti7rbsg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="q3-fskb6g"/><path class="gvti7rbsg"/></g>`,
		"fallback": "streamline-freehand:form-edition-text-2",
	});
}

export default Component;
