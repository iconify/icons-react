import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/h/hg0wxlrhj.css';
import '../../css/d/d465v9bll.css';
import '../../css/v/vbc8ai-qb.css';
import '../../css/t/tpnfn4b2j.css';
import '../../css/a/ap2s0m7in.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="hg0wxlrhj"/><path class="d465v9bll"/><path class="vbc8ai-qb"/><path class="tpnfn4b2j"/><path class="ap2s0m7in"/></g>`,
		"fallback": "solar:gamepad-no-charge-outline",
	});
}

export default Component;
