import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n8oo7gb6g.css';
import '../../css/n/n8f-h3bnx.css';
import '../../css/j/j91r8r5re.css';

const viewBox = {"width":50,"height":50};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n8oo7gb6g"><path class="n8f-h3bnx"/><path class="j91r8r5re"/></g>`,
		"fallback": "marketeq:badge",
	});
}

export default Component;
