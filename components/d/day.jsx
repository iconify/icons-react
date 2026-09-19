import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/c7iwfpmcu.css';
import '../../css/q/qhe2p8bmz.css';
import '../../css/n/n50ber1gu.css';
import '../../css/w/wzdkftm_a.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="c7iwfpmcu"/><path class="qhe2p8bmz"/><path clip-rule="evenodd" class="n50ber1gu"/><path class="wzdkftm_a"/></g>`,
		"fallback": "glyphs-poly:day",
	});
}

export default Component;
