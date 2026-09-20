import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n8oo7gb6g.css';
import '../../css/l/l1pj7ac9y.css';
import '../../css/e/emifrh09k.css';

const viewBox = {"width":50,"height":50};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n8oo7gb6g"><path class="l1pj7ac9y"/><path class="emifrh09k"/></g>`,
		"fallback": "marketeq:email-file",
	});
}

export default Component;
