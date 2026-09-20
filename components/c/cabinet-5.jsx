import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n8oo7gb6g.css';
import '../../css/y/yligwsb1r.css';
import '../../css/k/k2pndl-zz.css';

const viewBox = {"width":50,"height":50};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n8oo7gb6g"><path class="yligwsb1r"/><path class="k2pndl-zz"/></g>`,
		"fallback": "marketeq:cabinet-5",
	});
}

export default Component;
