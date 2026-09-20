import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n8oo7gb6g.css';
import '../../css/o/oc7tbourx.css';
import '../../css/q/qaabxtd0t.css';

const viewBox = {"width":50,"height":50};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n8oo7gb6g"><path class="oc7tbourx"/><path class="qaabxtd0t"/></g>`,
		"fallback": "marketeq:flask-3",
	});
}

export default Component;
