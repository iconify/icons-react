import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/x/xxht6ecbg.css';
import '../../css/n/nusxqacgw.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="xxht6ecbg"/><path class="nusxqacgw"/></g>`,
		"fallback": "streamline-flex:cake-slice",
	});
}

export default Component;
