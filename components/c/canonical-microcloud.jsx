import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/xie2seq-y.css';
import '../../css/d/d8xwt1ukm.css';
import '../../css/a/aq3o-294l.css';
import '../../css/a/ayjk_vbcj.css';

const viewBox = {"width":150,"height":150};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="xie2seq-y"/><path clip-rule="evenodd" class="d8xwt1ukm"/><path class="aq3o-294l"/><path class="ayjk_vbcj"/></g>`,
		"fallback": "thesvg-color:canonical-microcloud",
	});
}

export default Component;
