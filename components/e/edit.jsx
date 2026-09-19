import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/b/bz-l63bjr.css';
import '../../css/x/xpgqq5bjf.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="bz-l63bjr"/><path class="xpgqq5bjf"/></g>`,
		"fallback": "glyphs:edit",
	});
}

export default Component;
