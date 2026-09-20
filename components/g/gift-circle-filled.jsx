import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/h/hjzzbm_-c.css';
import '../../css/d/d-vnzkvhk.css';
import '../../css/q/q069o1bak.css';
import '../../css/z/zudxtebic.css';
import '../../css/n/nsqpiacms.css';
import '../../css/f/fgjwwczuh.css';
import '../../css/k/kspoj7vnd.css';

const viewBox = {"width":26,"height":26};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="hjzzbm_-c"/><path clip-rule="evenodd" class="d-vnzkvhk"/><path class="q069o1bak"/><path class="zudxtebic"/><path clip-rule="evenodd" class="nsqpiacms"/><path clip-rule="evenodd" class="fgjwwczuh"/><path clip-rule="evenodd" class="kspoj7vnd"/></g>`,
		"fallback": "pepicons-print:gift-circle-filled",
	});
}

export default Component;
