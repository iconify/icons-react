import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pjqtsmahd.css';
import '../../css/j/j3db7i19m.css';
import '../../css/l/lpoyqucgp.css';
import '../../css/r/ryw9vbdrn.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="pjqtsmahd"/><path clip-rule="evenodd" class="j3db7i19m"/><path class="lpoyqucgp"/><path clip-rule="evenodd" class="ryw9vbdrn"/></g>`,
		"fallback": "glyphs:hotel-1-outline",
	});
}

export default Component;
