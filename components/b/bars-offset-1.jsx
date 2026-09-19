import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wwvp95byt.css';
import '../../css/a/aeo0j_bhm.css';
import '../../css/h/h3alimzbv.css';
import '../../css/r/rgb8ipf3g.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="wwvp95byt"><path class="aeo0j_bhm"/><path class="h3alimzbv"/><path class="rgb8ipf3g"/></g>`,
		"fallback": "glyphs-poly:bars-offset-1",
	});
}

export default Component;
