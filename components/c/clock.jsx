import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/r/ra6t56b6o.css';
import '../../css/n/nc3xhsbmy.css';
import '../../css/p/pels_b8uv.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="ra6t56b6o"/><path class="nc3xhsbmy"/><path class="pels_b8uv"/></g>`,
		"fallback": "pepicons:clock",
	});
}

export default Component;
