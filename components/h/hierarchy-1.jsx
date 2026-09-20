import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/y/yr13dvb0y.css';
import '../../css/p/pyiru72eh.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="yr13dvb0y"/><path class="pyiru72eh"/></g>`,
		"fallback": "streamline-flex:hierarchy-1",
	});
}

export default Component;
