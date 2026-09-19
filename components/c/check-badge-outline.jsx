import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/ztd6seb3o.css';
import '../../css/w/wni7cbbjl.css';
import '../../css/b/buhoe6w5z.css';
import '../../css/n/nrouxcbcz.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ztd6seb3o"/><path clip-rule="evenodd" class="wni7cbbjl"/><path class="buhoe6w5z"/><path clip-rule="evenodd" class="nrouxcbcz"/></g>`,
		"fallback": "glyphs:check-badge-outline",
	});
}

export default Component;
