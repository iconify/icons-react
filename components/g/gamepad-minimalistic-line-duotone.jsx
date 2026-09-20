import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/i/i-cshmbqg.css';
import '../../css/q/q06c_hbai.css';
import '../../css/q/q9-5m7ymk.css';
import '../../css/d/dxhoj-bmr.css';
import '../../css/g/gzr0zyb3l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="i-cshmbqg"/><path class="q06c_hbai"/><path class="q9-5m7ymk"/><path class="dxhoj-bmr"/><path class="gzr0zyb3l"/></g>`,
		"fallback": "solar:gamepad-minimalistic-line-duotone",
	});
}

export default Component;
