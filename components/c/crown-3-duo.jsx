import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/d47doqb0c.css';
import '../../css/a/aylx3_bpp.css';
import '../../css/p/pu67nfbgn.css';
import '../../css/z/zjtk3jbat.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="d47doqb0c"/><path class="aylx3_bpp"/><path class="pu67nfbgn"/><path class="zjtk3jbat"/></g>`,
		"fallback": "glyphs:crown-3-duo",
	});
}

export default Component;
