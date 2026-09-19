import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/b/b_zop_bkd.css';
import '../../css/k/k1u3rdh2l.css';
import '../../css/t/t018kgb2u.css';
import '../../css/w/wa93a239p.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="b_zop_bkd"/><path class="k1u3rdh2l"/><path class="t018kgb2u"/><path class="wa93a239p"/></g>`,
		"fallback": "glyphs:battery-3-outline",
	});
}

export default Component;
