import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n8oo7gb6g.css';
import '../../css/e/eh8po51gx.css';
import '../../css/k/k0tem2btx.css';
import '../../css/o/ofonheb_q.css';

const viewBox = {"width":50,"height":50};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n8oo7gb6g"><path class="eh8po51gx"/><path class="k0tem2btx"/><path class="ofonheb_q"/></g>`,
		"fallback": "marketeq:goal",
	});
}

export default Component;
