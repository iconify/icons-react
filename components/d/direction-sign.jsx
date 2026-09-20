import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n8oo7gb6g.css';
import '../../css/d/d2x56ibxt.css';
import '../../css/b/bbh9ucidg.css';

const viewBox = {"width":50,"height":50};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n8oo7gb6g"><path class="d2x56ibxt"/><path class="bbh9ucidg"/></g>`,
		"fallback": "marketeq:direction-sign",
	});
}

export default Component;
