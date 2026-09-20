import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/q/qtac65b2y.css';
import '../../css/n/n8idwqb-m.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="qtac65b2y"/><path class="n8idwqb-m"/></g>`,
		"fallback": "streamline-flex:allergens-fish",
	});
}

export default Component;
