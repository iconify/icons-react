import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fq2jchbdb.css';
import '../../css/m/mhf7b27xx.css';
import '../../css/w/w-zm1cbor.css';
import '../../css/l/l78br_b1h.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="fq2jchbdb"/><path class="mhf7b27xx"/><path class="w-zm1cbor"/><path class="l78br_b1h"/></g>`,
		"fallback": "glyphs-poly:comment-asterisk",
	});
}

export default Component;
