import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/r/r1fac9bcy.css';
import '../../css/u/ut8732-ff.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="r1fac9bcy"/><path class="ut8732-ff"/></g>`,
		"fallback": "streamline-flex:cube",
	});
}

export default Component;
