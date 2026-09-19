import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/bpin_ybto.css';
import '../../css/z/z6u3wm4qg.css';
import '../../css/c/cmwyd1azu.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="bpin_ybto"/><path clip-rule="evenodd" class="z6u3wm4qg"/><path class="cmwyd1azu"/></g>`,
		"fallback": "glyphs:globe-west-bold",
	});
}

export default Component;
