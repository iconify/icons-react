import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/a/a84iinm6y.css';
import '../../css/o/ockqzh25t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="a84iinm6y"/><path class="ockqzh25t"/></g>`,
		"fallback": "proicons:file-text",
	});
}

export default Component;
