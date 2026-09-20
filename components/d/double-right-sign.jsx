import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n8oo7gb6g.css';
import '../../css/e/e0zp63bkd.css';
import '../../css/e/ealpwmh-w.css';

const viewBox = {"width":50,"height":50};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n8oo7gb6g"><path class="e0zp63bkd"/><path class="ealpwmh-w"/></g>`,
		"fallback": "marketeq:double-right-sign",
	});
}

export default Component;
