import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n8oo7gb6g.css';
import '../../css/z/zab0rqr1f.css';
import '../../css/v/vtgn5bc2c.css';

const viewBox = {"width":50,"height":50};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n8oo7gb6g"><path class="zab0rqr1f"/><path class="vtgn5bc2c"/></g>`,
		"fallback": "marketeq:camping-chair",
	});
}

export default Component;
