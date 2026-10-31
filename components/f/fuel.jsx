import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/s/s1uw2-brt.css';
import '../../css/t/tx0ntfbaf.css';
import '../../css/f/flghe58zp.css';
import '../../css/r/rg822gb7d.css';
import '../../css/n/n--daxb6h.css';
import '../../css/o/oyhku1ogo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="s1uw2-brt wm-shadow"/><path class="tx0ntfbaf"/><path class="flghe58zp"/><path class="rg822gb7d"/><path class="n--daxb6h"/><path class="oyhku1ogo"/></g>`,
		"fallback": "withicons-retro:fuel",
	});
}

export default Component;
