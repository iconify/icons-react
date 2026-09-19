import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/ddvgu8bvv.css';
import '../../css/u/uwwveub8c.css';
import '../../css/h/h90f8n14m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ddvgu8bvv"><path class="uwwveub8c"/><path class="h90f8n14m"/></g>`,
		"fallback": "hugeicons:ai-security-03",
	});
}

export default Component;
