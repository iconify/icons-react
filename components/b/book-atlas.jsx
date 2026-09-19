import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/a/aq31iu2el.css';
import '../../css/i/ifr_y32zs.css';
import '../../css/c/cjgizhsau.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="aq31iu2el"/><path class="ifr_y32zs"/><path class="cjgizhsau"/></g>`,
		"fallback": "glyphs:book-atlas",
	});
}

export default Component;
