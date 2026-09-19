import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/b/bvy93fbvi.css';
import '../../css/o/o-al02bsf.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="bvy93fbvi"/><path class="o-al02bsf"/></g>`,
		"fallback": "glyphs:border",
	});
}

export default Component;
