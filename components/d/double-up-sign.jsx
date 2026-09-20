import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n8oo7gb6g.css';
import '../../css/y/y27uu_0xr.css';
import '../../css/n/n2x3mnbzy.css';

const viewBox = {"width":50,"height":50};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n8oo7gb6g"><path class="y27uu_0xr"/><path class="n2x3mnbzy"/></g>`,
		"fallback": "marketeq:double-up-sign",
	});
}

export default Component;
