import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/p/pxy5wxb2o.css';
import '../../css/h/h2tkw0b0p.css';
import '../../css/k/kqlaetbyj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="pxy5wxb2o"/><path class="h2tkw0b0p"/><path class="kqlaetbyj"/></g>`,
		"fallback": "hugeicons:cinnamon-roll",
	});
}

export default Component;
