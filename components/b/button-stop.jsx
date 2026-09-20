import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/l/lf1_tebqc.css';
import '../../css/d/dwn1o_bsz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="lf1_tebqc"/><path class="dwn1o_bsz"/></g>`,
		"fallback": "streamline-ultimate:button-stop",
	});
}

export default Component;
