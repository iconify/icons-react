import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n8oo7gb6g.css';
import '../../css/o/o9s-nsb8n.css';
import '../../css/m/m8e7l2bxy.css';

const viewBox = {"width":50,"height":50};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n8oo7gb6g"><path class="o9s-nsb8n"/><path class="m8e7l2bxy"/></g>`,
		"fallback": "marketeq:bank",
	});
}

export default Component;
