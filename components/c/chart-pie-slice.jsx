import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/h/h19bisb2n.css';
import '../../css/u/usmzsi-sj.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="h19bisb2n"/><path class="usmzsi-sj"/></g>`,
		"fallback": "glyphs:chart-pie-slice",
	});
}

export default Component;
