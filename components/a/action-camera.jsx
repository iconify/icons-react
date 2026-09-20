import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n8oo7gb6g.css';
import '../../css/e/e440ngb5f.css';
import '../../css/p/px88kcczs.css';

const viewBox = {"width":50,"height":50};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n8oo7gb6g"><path class="e440ngb5f"/><path class="px88kcczs"/></g>`,
		"fallback": "marketeq:action-camera",
	});
}

export default Component;
