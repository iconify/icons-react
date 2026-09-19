import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/e/edeja6jms.css';
import '../../css/u/u_by7jkqs.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="edeja6jms"/><path class="u_by7jkqs"/></g>`,
		"fallback": "glyphs:grid-1-outline",
	});
}

export default Component;
