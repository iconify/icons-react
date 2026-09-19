import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/k/kw_hy2d5j.css';
import '../../css/s/swb_4bhpm.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="kw_hy2d5j"/><path class="swb_4bhpm"/></g>`,
		"fallback": "glyphs:envelope-front",
	});
}

export default Component;
