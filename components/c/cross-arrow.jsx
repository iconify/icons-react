import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n8oo7gb6g.css';
import '../../css/j/jn3njgixf.css';
import '../../css/k/k0rde2b7t.css';

const viewBox = {"width":50,"height":50};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n8oo7gb6g"><path class="jn3njgixf"/><path class="k0rde2b7t"/></g>`,
		"fallback": "marketeq:cross-arrow",
	});
}

export default Component;
