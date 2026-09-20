import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n8oo7gb6g.css';
import '../../css/z/z--_c9ipe.css';
import '../../css/s/s8lbu8_7j.css';
import '../../css/t/tl7v_mbuu.css';

const viewBox = {"width":50,"height":50};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n8oo7gb6g"><path class="z--_c9ipe"/><path class="s8lbu8_7j"/><path class="tl7v_mbuu"/></g>`,
		"fallback": "marketeq:bikecycle",
	});
}

export default Component;
