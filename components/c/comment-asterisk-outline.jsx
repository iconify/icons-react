import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/s7g8mqb5w.css';
import '../../css/h/h7e86bbxn.css';
import '../../css/w/w_zdecccl.css';
import '../../css/w/wpe_c3oqb.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="s7g8mqb5w"/><path clip-rule="evenodd" class="h7e86bbxn"/><path class="w_zdecccl"/><path clip-rule="evenodd" class="wpe_c3oqb"/></g>`,
		"fallback": "glyphs:comment-asterisk-outline",
	});
}

export default Component;
