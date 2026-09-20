import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n8oo7gb6g.css';
import '../../css/e/e55z5e0sb.css';
import '../../css/s/s57r1zbzd.css';
import '../../css/f/fhdna9knv.css';

const viewBox = {"width":50,"height":50};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n8oo7gb6g"><path class="e55z5e0sb"/><path class="s57r1zbzd"/><path class="fhdna9knv"/></g>`,
		"fallback": "marketeq:chart-column-grow",
	});
}

export default Component;
