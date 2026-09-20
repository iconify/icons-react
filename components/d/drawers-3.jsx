import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n8oo7gb6g.css';
import '../../css/q/q5uv25gyv.css';
import '../../css/d/d2mr3hbgt.css';

const viewBox = {"width":50,"height":50};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n8oo7gb6g"><path class="q5uv25gyv"/><path class="d2mr3hbgt"/></g>`,
		"fallback": "marketeq:drawers-3",
	});
}

export default Component;
