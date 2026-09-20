import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n8oo7gb6g.css';
import '../../css/d/dlkii0bzu.css';
import '../../css/n/nu86q5zig.css';

const viewBox = {"width":50,"height":50};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n8oo7gb6g"><path class="dlkii0bzu"/><path class="nu86q5zig"/></g>`,
		"fallback": "marketeq:frying-pan",
	});
}

export default Component;
