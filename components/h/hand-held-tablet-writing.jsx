import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/cnv3aud8t.css';
import '../../css/g/g2u1zwb5g.css';
import '../../css/t/t8k5qrblg.css';
import '../../css/p/p_zqi6e0h.css';
import '../../css/z/zn6nqgbao.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="cnv3aud8t"/><path class="g2u1zwb5g"/><path class="t8k5qrblg"/><path class="p_zqi6e0h"/><path class="zn6nqgbao"/></g>`,
		"fallback": "streamline-color:hand-held-tablet-writing",
	});
}

export default Component;
