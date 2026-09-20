import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/a/agkb7q5ez.css';
import '../../css/y/yazhrsbpy.css';
import '../../css/d/dqi84u9xn.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="agkb7q5ez"/><path class="yazhrsbpy"/><path class="dqi84u9xn"/></g>`,
		"fallback": "streamline-flex:browser-multiple-window",
	});
}

export default Component;
