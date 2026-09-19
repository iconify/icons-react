import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fb195ladc.css';
import '../../css/d/d-047h7xd.css';
import '../../css/c/cvqkf_yxp.css';
import '../../css/l/ly-3bkb4n.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="fb195ladc"/><path clip-rule="evenodd" class="d-047h7xd"/><path class="cvqkf_yxp"/><path clip-rule="evenodd" class="ly-3bkb4n"/></g>`,
		"fallback": "glyphs:baseball-outline",
	});
}

export default Component;
