import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/b/bvqamvbai.css';
import '../../css/x/x-s0u0b9w.css';
import '../../css/s/si3inpc3v.css';
import '../../css/i/i70bgdbfl.css';
import '../../css/k/ko6o-6b9b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="bvqamvbai"/><path class="x-s0u0b9w"/><path class="si3inpc3v"/><path class="i70bgdbfl"/><path class="ko6o-6b9b"/></g>`,
		"fallback": "solar:bluetooth-circle-broken",
	});
}

export default Component;
