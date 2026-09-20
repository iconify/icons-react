import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/l/lbpixvbyy.css';
import '../../css/s/sj2wpqb8i.css';
import '../../css/t/tkn4_ibhf.css';
import '../../css/y/y3q0d4a1h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="lbpixvbyy"/><path class="sj2wpqb8i"/><path class="tkn4_ibhf"/><path class="y3q0d4a1h"/></g>`,
		"fallback": "reicon:home-wifi-duotone",
	});
}

export default Component;
