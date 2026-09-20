import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n8oo7gb6g.css';
import '../../css/s/sfh2_1bbo.css';
import '../../css/h/h-pjvxgif.css';

const viewBox = {"width":50,"height":50};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n8oo7gb6g"><path class="sfh2_1bbo"/><path class="h-pjvxgif"/></g>`,
		"fallback": "marketeq:caution",
	});
}

export default Component;
