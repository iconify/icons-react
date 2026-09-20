import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/zpipi6b-c.css';
import '../../css/m/mnlx_uq5n.css';
import '../../css/b/b0qzi4yvv.css';
import '../../css/c/c9hi2nbvd.css';
import '../../css/i/i2wae2bks.css';
import '../../css/y/yfyldmbax.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="zpipi6b-c"/><path class="mnlx_uq5n"/><path class="b0qzi4yvv"/><path class="c9hi2nbvd"/><path class="i2wae2bks"/><path class="yfyldmbax"/></g>`,
		"fallback": "streamline-flex-color:browser-multiple-window",
	});
}

export default Component;
