import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/y7o6p313a.css';
import '../../css/l/llazf4bft.css';
import '../../css/q/q_9vf3bay.css';
import '../../css/b/bic_d9jnz.css';
import '../../css/n/nta0hhc3g.css';
import '../../css/l/lhk1rpbis.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="y7o6p313a"/><path clip-rule="evenodd" class="llazf4bft"/><path clip-rule="evenodd" class="q_9vf3bay"/><path class="bic_d9jnz"/><path clip-rule="evenodd" class="nta0hhc3g"/><path clip-rule="evenodd" class="lhk1rpbis"/></g>`,
		"fallback": "glyphs:car-crash-outline",
	});
}

export default Component;
